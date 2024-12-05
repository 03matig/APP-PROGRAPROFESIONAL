import React, {useState} from 'react';
import './styles/Login_styles.css';
import './imagenes/webc-logo.png';
import { useNavigate } from 'react-router-dom';

export function Login ({setUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole] = useState(null);
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === "" || password === ""){
            setError(true);
            return
        }
        setError(false);
        setUser([username])

        console.log('Sending request to backend');  // Log de solicitud

        try {
            const response = await fetch('http://40.76.107.0:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.info('Login successful', data);
                const { access_token, userRole, _id, nombre, carrera } = data;
                setNombre(nombre);
                localStorage.setItem('accessToken', access_token);
                localStorage.setItem('username', username);
                localStorage.setItem('userId', _id);
                localStorage.setItem('rol', userRole);
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('carrera', carrera);
                navigate('/Home', { state: { nombre } });
            } else {
                console.log('Login failed', data);
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Algo anduvo mal. Por favor, intente de nuevo más tarde.');
        }
        };
    
                return (
                
                    <div className="container-fluid">
                        <div className="login-wrapper" id="yui_3_17_2_1_1711466503022_33" style= {{ alignItems: 'center' , justifyContent: 'center' , height: '100%', padding: '32px'}}>
                            <div className="login-container" style={{width:'422px', height:'auto', padding: '32px', borderRadius:'8px'}}>
                                <div className="logo-area r-mb-16" style = {{padding: '5px', textAlign: 'center', boxSizing: 'border-box'}}>
                                    <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/loginpanellogo/1711007324/logo_pregrado.png" className="logo" style={{ width: '200px', height: 'auto', verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center' }}>
                                    </img>
                                </div>
                                <div role="main"><span id="maincontent"></span>
                                    <div className="loginform d-flex  flex-gap-8">
                                        <div className="login-welcome-wrapper d-flex  flex-gap-1 text-center" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                                            <h2 className="h-bold-3 m-0">
                                                Hola, bienvenido a UAI Webcursos Pregrado
                                            </h2>
                                            <p className="para-regular-3 m-0">Ingrese sus datos para iniciar sesión en su cuenta</p>
                                        </div>
                                        <form className="login-form" action="https://webc.uai.cl/login/index.php" onSubmit={handleSubmit} method="post" id="login" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>                        
                                            <div className="login-form-username form-group">
                                                <label htmlFor="username" className="sr-only">
                                                    Nombre de usuario
                                                </label>
                                                <label className="text-link-semibold form-label-color" tabIndex="-1">
                                                    Nombre de usuario<br></br>
                                                </label>
                                                <input type="text" name="username" id="username" className="form-control form-control-lg" value= {username} onChange = {(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" autoComplete="username"style={{textAlign:'center'}}></input>
                                            </div>
                                            <div className="login-form-password form-group" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                <label htmlFor="password" className="sr-only">
                                                    Contraseña
                                                </label>
                                                <label className="text-link-semibold form-label-color" tabIndex="-1">
                                                    Contraseña <br></br>
                                                </label>
                                                <div className="position-relative password-field-eye">
                                                    <input type="password" name="password" id="password" value={password} onChange = {(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Contraseña" autoComplete="current-password" style={{textAlign:'center'}}></input>                                            
                                                    <span className="edw-icon edw-icon-Show show-password-icon"></span>
                                                </div>
                                            </div>
                                            <div className="login-form-forgotpassword form-group text-right small-info-semibold">
                                                <a href="https://webc.uai.cl/login/forgot_password.php">¿Olvidó su contraseña?</a>
                                            </div>
                                            <div className="login-form-submit form-group">
                                                <button className="btn btn-primary btn-lg btn-block" type="submit" id="loginbtn">Acceder</button>
                                            </div>
                                        </form>
                                        {error && <p style={{textAlign:'center'}}>Todos los campos son obligatorios!</p>}

                                        <div className="login-identityproviders d-flex flex-gap-6" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                                            <h2 className="login-heading text-align-middle h-semibold-6 m-0">
                                            O inicie sesión con su cuenta
                                            </h2>

                                            <div className="login-identityprovider-btn-wrapper d-flex flex-gap-6 justify-content-center">
                                                <a className="login-identityprovider-btn border-0" href="https://webc.uai.cl/auth/oauth2/login.php?id=1&amp;wantsurl=https%3A%2F%2Fwebc.uai.cl%2F&amp;sesskey=63Xl0NSz5X" title="Microsoft">
                                                    <img src="https://www.microsoft.com/favicon.ico" alt="" width="24" height="24"></img>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center flex-gap-8 cookies-section" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                                            <div className="login-languagemenu text-link-semibold">
                                                <div className="action-menu moodle-actionmenu" id="action-menu-0" data-enhance="moodle-core-actionmenu">
                                                    <div className="menubar d-flex " id="action-menu-0-menubar">
                                                        <div className="action-menu-trigger">
                                                            <div className="dropdown">
                                                                <a href="#" tabIndex="0" className=" dropdown-toggle icon-no-margin" id="action-menu-toggle-0" aria-label="Español - Internacional ‎(es)‎" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-0-menu">
                                                                    Español - Internacional ‎(es)‎
                                                                    <b className="caret"></b>
                                                                </a>
                                                                <div className="dropdown-menu menu dropdown-menu-right" id="action-menu-0-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-0" role="menu">
                                                                    <a href="https://webc.uai.cl/login/index.php?lang=en" className="dropdown-item menu-action" data-lang="en" lang="en" role="menuitem" tabIndex="-1" aria-labelledby="actionmenuaction-1">
                                                                        <span className="menu-action-text" id="actionmenuaction-1">English ‎(en)‎</span>
                                                                    </a>
                                                                    <a href="#" className="dropdown-item menu-action" role="menuitem" tabIndex="-1" aria-labelledby="actionmenuaction-2">
                                                                        <span className="menu-action-text" id="actionmenuaction-2">Español - Internacional ‎(es)‎</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )}
