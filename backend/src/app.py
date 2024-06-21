from flask import Flask, request, jsonify, redirect, url_for, session
from requests_oauthlib import OAuth2Session
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from bson import ObjectId, Binary
from bson.json_util import dumps
import logging
import os

# Establezco la instancia y la llamo por medio de una variable.
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://MatiasGarin:31102023@cluster0.hck92kq.mongodb.net/Universidad'
app.config['JWT_SECRET_KEY'] = 'JSONWebToken_secret_key'
#app.config['SECRET_KEY'] = os.urandom(24)
app.secret_key = os.urandom(24)

# Instanciamos y definimos variables
mongo = PyMongo(app) 
bcrypt = Bcrypt(app)

#Configuraciones
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])
jwt = JWTManager(app)
# oauth = OAuth(app)

# Configuramos el logger
logging.basicConfig(level=logging.DEBUG)

# Base de Datos
db = mongo.db

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


def crear_usuario_automatico(username, nombre, password, carrera, año, rol):
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
def crear_usuarios_automaticamente():
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
        crear_usuario_automatico(usuario_data['username'], usuario_data['nombre'], usuario_data['password'], usuario_data['carrera'], usuario_data['año'], usuario_data['rol'])
        print(f"Created user with username {usuario_data['username']}")

#crear_usuarios_automaticamente()

#Acá verificaré la creación automática del usuario
@app.route('/verificar_usuario_automatico', methods=['GET'])
def verificar_creacion_automatica():
    # Obtener el usuario creado automáticamente
    usuario = db.users.find_one({'username': 'magarin@alumnos.uai.cl'})

    if usuario:
        usuario['_id'] = str(usuario['_id'])
        return jsonify({'message': 'Usuario creado automáticamente:', 'usuario': usuario})
    else:
        return jsonify({'message': 'No se encontró el usuario creado automáticamente'})


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
        return f'Error al ejecutar el comando: {e}'  #mongodb usersinfo <username>


@app.route('/usuarios', methods=['POST'])
def createUser():       
    return 'received'


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.users.find(): #db.find() => db.Login.find();
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


if __name__ =="__main__":
    app.run(host='localhost', port=5000, debug=True) #acá se establece dónde se desea ejecutar la aplicación de flask.
