from flask import Flask, request, jsonify, redirect, url_for, session, send_file
from requests_oauthlib import OAuth2Session
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from bson import ObjectId, Binary
from bson.json_util import dumps
import logging
import os
import random
import gridfs
import io

# Establezco la instancia y la llamo por medio de una variable.
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://MatiasGarin:31102023@cluster0.hck92kq.mongodb.net/Universidad'
app.config['JWT_SECRET_KEY'] = 'JSONWebToken_secret_key'
app.config['SECRET_KEY'] = os.urandom(24)
app.secret_key = os.urandom(24)

# Instanciamos y definimos variables
mongo = PyMongo(app) 
bcrypt = Bcrypt(app)

#Configuraciones
CORS(app, supports_credentials=True)
jwt = JWTManager(app)
# oauth = OAuth(app)

# Configuramos el logger
logging.basicConfig(level=logging.DEBUG)

# Base de Datos
db = mongo.db
fs = gridfs.GridFS(db)

# Configuraciones de Zoom

# Desactivamos la restricción que exige el uso de HTTPS
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# Configuración de Zoom OAuth
client_id = '0ieYRQSGGTrKyVxLYTCw'
client_secret = 'GIdGwgeExXzIt9dBJTNlWLoRtq6gs3Z0'
authorization_base_url = 'https://zoom.us/oauth/authorize'
token_url = 'https://zoom.us/oauth/token'
redirect_uri = 'http://localhost:5000/zoom/callback'

# Scopes requeridos
scopes = [
    'user:write:assistant',
    'user:update:status',
    'user:delete:scheduler',
    'user:delete:user',
    'user:update:settings',
    'user:delete:token',
    'user:update:password',
    'user:update:presence_status',
    'user:update:user',
    'user:delete:assistant',
    'user:update:email',
    'user:write:virtual_background_files',
    'user:delete:virtual_background_files',
    'user:write:profile_picture'
]


def create_user_auto(username, nombre, password, carrera, año, rol):
    #Hashear y saltear la contraseña
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Insertar usuario en la base de datos
    db.users.insert_one({
        'username': username,
        'nombre': nombre,
        'password': hashed_password,
        'carrera': carrera,
        'año': año,
        'rol': rol
    })


# Crear usuario automáticamente al iniciar la aplicación Flask
def create_users_auto():
    # Datos de los usuarios a crear
    usuarios = [
        {'username': 'magarin@alumnos.uai.cl', 'nombre': 'Matías Garín', 'password': 'testpassword1', 'carrera': 'Ingeniería Civil Informática', 'año': '4to año','rol': 'alumno'},
        {'username': 'jacofre@alumnos.uai.cl', 'nombre': 'Javiera Cofré', 'password': 'testpassword2', 'carrera': 'Ingeniería Civil Industrial', 'año': '4to año', 'rol': 'alumno'},
        {'username': 'profesor1@uai.cl', 'nombre': 'Profesor N°1', 'password': 'testpassword3', 'carrera': 'null', 'año': 'null', 'rol': 'profesorUniversidad'},
        {'username': 'admin@admin.uai.cl', 'nombre': 'Admin', 'password': 'admin123', 'carrera': 'null', 'año': 'null', 'rol': 'adminUniversidad'}
    ]

    # Eliminar los usuarios existentes
    for usuario_data in usuarios:
        result = db.users.delete_one({'username': usuario_data['username']})
        print(f"Deleted {result.deleted_count} user(s) with username {usuario_data['username']}")

    # Crear los usuarios
    for usuario_data in usuarios:
        create_user_auto(usuario_data['username'], usuario_data['nombre'], usuario_data['password'], usuario_data['carrera'], usuario_data['año'], usuario_data['rol'])
        print(f"Created user with username {usuario_data['username']}")

#create_users_auto()

#Acá verificaré la creación automática del usuario
@app.route('/verify_auto_creation', methods=['GET'])
def verify_auto_creation():
    # Obtener el usuario creado automáticamente
    usuario = db.users.find_one({'username': 'magarin@alumnos.uai.cl'})

    if usuario:
        usuario['_id'] = str(usuario['_id'])
        return jsonify({'message': 'Usuario creado automáticamente:', 'usuario': usuario})
    else:
        return jsonify({'message': 'No se encontró el usuario creado automáticamente'})

# Consultas API para la funcionalidad del Inicio de Sesión con Hash + Salt y Sanitización
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    #nombre = data['nombre']

    app.logger.debug('Received login request for username: %s', username)

    # Buscar al usuario en la base de datos
    user = mongo.db.users.find_one({'username': username})

    if user:
        # Comparar la contraseña directamente
        stored_password = user['password']

        app.logger.debug('User found in database: %s', user)

            

        # Verificar la contraseña proporcionada contra el hash almacenado
        if bcrypt.check_password_hash(stored_password, password):
            access_token = create_access_token(identity=str(user['_id']))
            return jsonify({
                'message': 'Login successful',
                'username': username,
                'access_token': access_token,
                '_id': str(user['_id']),
                'nombre': user['nombre'],
                'carrera': user['carrera'],
                'rol': user['rol'],
            }), 200
        else:
            return jsonify({'message': 'Invalid username or password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/get_user_role', methods=['GET'])
def get_user_role():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400

    user = db.users.find_one({'_id': ObjectId(user_id)})
    if user:
        return jsonify({'role': user.get('rol')}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

# Consultas API para la funcionalidad de Crear Links de Zoom:
@app.route('/zoom/login')
def zoom_login():
    zoom = OAuth2Session(client_id, redirect_uri=redirect_uri, scope=scopes)
    authorization_url, state = zoom.authorization_url(authorization_base_url)
    session['oauth_state'] = state
    app.logger.debug(f'Saving state: {state}')
    return redirect(authorization_url)

@app.route('/zoom/callback')
def zoom_callback():
    app.logger.debug(f'Saved state: {session.get("oauth_state")}')
    app.logger.debug(f'Received state: {request.args.get("state")}')
    zoom = OAuth2Session(client_id, state=session.get('oauth_state'), redirect_uri=redirect_uri)
    token = zoom.fetch_token(token_url, client_secret=client_secret, authorization_response=request.url)
    session['oauth_token'] = token
    app.logger.debug(f'Token: {token}')
    return redirect(url_for('zoom_success'))

@app.route('/zoom/success')
def zoom_success():
    return "Authorization successful. You can now close this window."

@app.route('/zoom/create_meeting', methods=['POST'])
def create_meeting():
    token = session.get('oauth_token')
    app.logger.debug(f'Token: {token}')
    if not token:
        return jsonify({'error': 'Not authenticated'}), 401

    zoom = OAuth2Session(client_id, token=token)
    user_info_response = zoom.get('https://api.zoom.us/v2/users/me')

    app.logger.debug(f'Zoom user info response status: {user_info_response.status_code}')
    app.logger.debug(f'Zoom user info response headers: {user_info_response.headers}')
    app.logger.debug(f'Zoom user info response text: {user_info_response.text}')
    
    if user_info_response.status_code != 200:
        return jsonify({'error': 'Error fetching user info from Zoom', 'details': user_info_response.text}), user_info_response.status_code
    
    user_info = user_info_response.json()

    if 'id' not in user_info:
        app.logger.error(f'User info does not contain id: {user_info}')
        return jsonify({'error': 'User info from Zoom does not contain id'}), 400

    meeting_details = {
        "topic": request.json.get('topic'),
        "type": 2,  # Scheduled meeting
        "start_time": request.json.get('start_time'),  # Example: "2020-03-31T12:00:00Z"
        "duration": request.json.get('duration'),  # Meeting duration in minutes
        "timezone": "UTC",
        "agenda": request.json.get('agenda'),
        "settings": {
            "host_video": True,
            "participant_video": True,
            "join_before_host": False,
            "mute_upon_entry": True,
            "watermark": False,
            "use_pmi": False,
            "approval_type": 1,
            "audio": "both",
            "auto_recording": "none",
            "enforce_login": False
        }
    }

    response = zoom.post(f'https://api.zoom.us/v2/users/{user_info["id"]}/meetings', json=meeting_details)
    app.logger.debug(f'Zoom API response: {response.status_code} - {response.text}')
    
    if response.status_code != 201:
        app.logger.error(f'Error creating meeting: {response.text}')
        return jsonify({'error': 'Error al crear la reunión'}), response.status_code

    return jsonify(response.json())

@app.route('/pasantias_pendientes', methods=['GET'])
def pasantias_pendientes():
    comisiones = db.Comisiones.find({})
    usuarios = [{"id": str(comision["_id"]), "nombre": comision["nombre"]} for comision in comisiones]
    return jsonify(usuarios), 200

@app.route('/post_zoom_link', methods=['POST'])
def post_zoom_link():
    data = request.get_json()
    nombre_alumno = data.get('nombre_alumno')
    zoom_link = data.get('zoom_link')

    if not nombre_alumno or not zoom_link:
        return jsonify({'error': 'Nombre del alumno y link de Zoom son requeridos'}), 400

    result = db.Comisiones.update_one(
        {'nombre': nombre_alumno},
        {'$set': {'internship-defense.internship-defense-zoom': zoom_link}}
    )

    if result.modified_count == 0:
        return jsonify({'error': 'No se encontró al alumno o no se pudo actualizar'}), 404

    return jsonify({'message': 'Link de Zoom actualizado correctamente'}), 200

# Notificaciones respecto de la API de Zoom:

@app.route('/get_notifications', methods=['GET'])
def get_notifications():
    user_id = request.args.get('user_id')
    
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400
    
    user = db.Comisiones.find_one({'id': user_id})
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    notifications = []
    
    if user.get('internship-defense', {}).get('internship-defense-zoom'):
        notifications.append(f"Se le asignó una reunión para su defensa de pasantía: {user['internship-defense']['internship-defense-zoom']}")
    
    return jsonify({'notifications': notifications}), 200


# Consultas API para la funcionalidad de Crear Comisiones
@app.route('/alumnos', methods=['GET'])
def get_alumnos():
    alumnos = db.Comisiones.find({"rol": "alumno"})
    alumnos_list = []
    for alumno in alumnos:
        alumnos_list.append({
            "username": alumno["username"],
            "nombre": alumno["nombre"],
            "carrera": alumno["carrera"],
            "rol": alumno["rol"],
            "profesores": alumno.get("profesores-a-cargo", {
                "Profesor N°1": {"id": "", "Nombre": "", "Carrera": ""},
                "Profesor N°2": {"id": "", "Nombre": "", "Carrera": ""},
                "Profesor N°3": {"id": "", "Nombre": "", "Carrera": ""}
            }),
            "internship-defense": alumno.get("internship-defense", {
                "upload-report-deadline": "", 
                "internship-report-pdf": "", 
                "internship-defense-date": "",
                "internship-defense-zoom": ""
            })
        })
    return jsonify(alumnos_list), 200

@app.route('/inscribir_profesor', methods=['POST'])
def inscribir_profesor():
    data = request.get_json()
    alumno_username = data['alumno_username']
    profesor_id = data['profesor_id']
    profesor_nombre = data['profesor_nombre']
    profesor_carrera = data['profesor_carrera']

    comision = db.Comisiones.find_one({'username': alumno_username})

    if not comision:
        return jsonify({'error': 'Comisión no encontrada'}), 404

    # Limpiar las entradas vacías de profesores
    comision['profesores-a-cargo'] = {k: v for k, v in comision['profesores-a-cargo'].items() if v['id']}

    profesores_inscritos = len(comision['profesores-a-cargo'])

    if profesores_inscritos >= 3:
        return jsonify({'error': 'La comisión ya tiene 3 profesores inscritos'}), 400

    for prof in comision['profesores-a-cargo'].values():
        if prof['id'] == profesor_id:
            return jsonify({'error': 'El profesor ya está inscrito en esta comisión'}), 400

    # Verificar si el profesor debe ser presidente
    presidente = 'no'
    if profesor_carrera == comision['carrera']:
        if not any(prof.get('President') == 'yes' for prof in comision['profesores-a-cargo'].values()):
            presidente = 'yes'

    comision['profesores-a-cargo'][f'Profesor N°{profesores_inscritos + 1}'] = {
        'id': profesor_id,
        'Nombre': profesor_nombre,
        'Carrera': profesor_carrera,
        'President': presidente
    }

    db.Comisiones.update_one(
        {'username': alumno_username},
        {'$set': {'profesores-a-cargo': comision['profesores-a-cargo']}}
    )

    return jsonify({'message': 'Profesor inscrito con éxito', 'presidente': presidente == 'yes'}), 200

# Consultas API para la funcionalidad de Subir, borrar y descargar archivos PDF.
@app.route('/upload', methods=['POST'])
def upload_file():
    user_id = request.form['userId']
    file = request.files['internship-report-pdf']
    
    if file:
        # Guardar el archivo en MongoDB usando GridFS
        file_id = fs.put(file, filename=file.filename, user_id=user_id)
        
        # Actualizar la base de datos con el ID del archivo
        db.Comisiones.update_one(
            {'id': user_id},
            {'$set': {'internship-defense.internship-report-pdf': str(file_id)}}
        )
        
        user_document = db.Comisiones.find_one({'id': user_id})
        if user_document:
            print(f"Document: {user_document['internship-defense']}")

        return jsonify({"message": "Archivo subido exitosamente"}), 200
    else:
        return jsonify({"message": "No se encontró el archivo"}), 400

@app.route('/delete', methods=['DELETE'])
def delete_file():
    user_id = request.args.get('userId')
    
    # Buscar el documento del usuario
    user_document = db.Comisiones.find_one({'id': user_id})
    
    if user_document and 'internship-defense' in user_document:
        file_id = user_document['internship-defense'].get('internship-report-pdf')
        
        if file_id:
            # Eliminar el archivo de GridFS
            fs.delete(ObjectId(file_id))
            
            # Actualizar el documento del usuario
            db.Comisiones.update_one(
                {'id': user_id},
                {'$unset': {'internship-defense.internship-report-pdf': ""}}
            )
            
            return jsonify({"message": "Archivo borrado exitosamente"}), 200
        else:
            return jsonify({"message": "No se encontró el archivo para borrar"}), 404
    else:
        return jsonify({"message": "No se encontró el documento del usuario"}), 404
    
@app.route('/download_pdf', methods=['GET'])
def download_pdf():
    file_id = request.args.get('fileId')
    if not file_id:
        print("No se proporcionó fileId")
        return jsonify({"message": "fileId es requerido"}), 400

    try:
        print(f"Buscando archivo con _id: {file_id}")
        file = fs.get(ObjectId(file_id))
        print(f"Archivo encontrado: {file.filename}")
        return send_file(
            io.BytesIO(file.read()),
            download_name=file.filename,  # Usar el nombre original del archivo
            as_attachment=True
        )
    except gridfs.errors.NoFile:
        print(f"No se encontró el archivo con _id: {file_id}")
        return jsonify({"message": "No se encontró el archivo"}), 404
    except Exception as e:
        print(f"Error al descargar el archivo: {e}")
        return jsonify({"message": "Error al descargar el archivo", "error": str(e)}), 500
   

# Pruebas iniciales
@app.route('/mostrar_usuarios', methods=['GET'])
def mostrar_usuarios():
    try:
        # Ejecutar el comando show users
        resultado = db.command('usersInfo')
        # Eliminar el atributo 'userId' de cada usuario
        for usuario in resultado['users']:
            del usuario['userId']
        # Devolver el resultado como JSON utilizando jsonify
        return jsonify(resultado)
    
    except Exception as e:
        return f'Error al ejecutar el comando: {e}'  


@app.route('/usuarios', methods=['POST'])
def createUser():       
    return 'received'


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.users.find():
        #if 'userId' in doc:
            users.append({
                '_id': str(ObjectId(doc['_id'])),
                'nombre': doc.get('nombre', ''),
                'correo': doc.get('correo', ''),
                'contraseña': doc.get('contraseña', '')
            })         
    return jsonify(users) 


@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user1 = db.Login.find_one({'_id': ObjectId(id)})
    print (user1)
    return jsonify({
      '_id': str(ObjectId(user1['_id'])),
      'nombre': user1['nombre'],
      'correo': user1['correo'],
      'contraseña': user1['contraseña']
  })


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    db.Login.update_one({'_id': ObjectId(id)}, {'$set': {
        'nombre': request.json['nombre'],
        'contraseña': request.json['contraseña']
    }})
    return jsonify({'msg': 'User Updated'})


# Establecemos dónde queremos desplegar la aplicación Flask.
if __name__ =="__main__":
    app.run(host='localhost', port=5000, debug=True) 

