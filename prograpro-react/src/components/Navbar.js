import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Navbar_styles.css';

export function Navbar({ user, setUser }) {
    const [webcursosOpen, setWebcursosOpen] = useState(false);
    const [uaiOpen, setUaiOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const toggleWebcursos = () => {
        setWebcursosOpen(!webcursosOpen);
    };

    const toggleUai = async () => {
        setUaiOpen(!uaiOpen);

        if (!uaiOpen) {
            try {
                const response = await fetch(`http://40.76.107.0:5000/get_user_role?user_id=${userId}`);
                const data = await response.json();

                if (response.ok) {
                    const { role } = data;
                    setUserRole(role);
                    localStorage.setItem('userRole', role);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        }
    };

    const toggleNotifications = async () => {
        setNotificationsOpen(!notificationsOpen);

        if (!notificationsOpen) {
            try {
                const response = await fetch(`http://40.76.107.0:5000/get_notifications?user_id=${userId}`);
                const data = await response.json();

                if (response.ok) {
                    setNotifications(data.notifications);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        }
    };

    const handleDashboardClick = () => {
        navigate('/Dashboard');
    };

    const VolveralInicio = () => {
        navigate('/Home');
    };

    const VolveralLogin = () => {
        navigate('/');
    };

    const handleLogout = () => {
        setUser([]);
        localStorage.clear();
        VolveralLogin();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="" className="navbar-brand d-none d-md-flex align-items-center m-0 aabtn" aria-label="WebcursosUAIPregrado - Nombre de la marca" title="WebcursosUAIPregrado" onClick={VolveralInicio}>
                    <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/logo/1715241806/logo.png" alt="Logo" className="navbar-logo-img" />
                </a>
                <div className="sub-nav">
                    <div className="primary-navigation">
                        <ul className="navbar-menu">
                            <li className="navbar-item" onClick={VolveralInicio}><a href="#" className="navbar-link">Página Principal</a></li>
                            <li className="navbar-item"><a href="https://webc.uai.cl/my/" className="navbar-link">Área personal</a></li>
                            <li className="navbar-item"><a href="https://webc.uai.cl/my/courses.php" className="navbar-link">Mis cursos</a></li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link dropdown-toggle" onClick={toggleWebcursos}>Webcursos</a>
                                <ul className={`dropdown-menu ${webcursosOpen ? 'show' : ''}`}>
                                    <li><a href="#" className="dropdown-item">Todos los cursos</a></li>
                                    <li><a href="#" className="dropdown-item">Tutoriales</a></li>
                                    <li><a href="#" className="dropdown-item">Términos y Condiciones</a></li>
                                    <li><a href="#" className="dropdown-item">Propiedad Intelectual</a></li>
                                </ul>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link dropdown-toggle" onClick={toggleUai}>UAI</a>
                                <ul className={`dropdown-menu ${uaiOpen ? 'show' : ''}`}>
                                    <li><a href="#" className="dropdown-item">Alumnos</a></li>
                                    <li><a href="#" className="dropdown-item">Profesores</a></li>
                                    <li><a href="#" className="dropdown-item">Correo UAI</a></li>
                                    <li><a href="#" className="dropdown-item">Biblioteca</a></li>
                                    <li><a href="#" className="dropdown-item">Soporte TI</a></li>
                                    {userRole === 'profesorUniversidad' || userRole === 'adminUniversidad' ? (
                                        <>
                                            <li className="dropdown-divider"></li>
                                            <li><a href="#" className="dropdown-item" onClick={handleDashboardClick}>Statistics Dashboard</a></li>
                                        </>
                                    ) : null}
                                </ul>
                            </li>
                            <li className="navbar-item"><a href="#" onClick={handleLogout} className="navbar-link">Cerrar sesión</a></li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link" onClick={toggleNotifications}>Notificaciones</a>
                                <ul className={`dropdown-menu notifications ${notificationsOpen ? 'show' : ''}`}>
                                    {notifications.length > 0 ? (
                                        notifications.map((notification, index) => (
                                            <li key={index} className="dropdown-item">{notification}</li>
                                        ))
                                    ) : (
                                        <li className="dropdown-item">No hay notificaciones</li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
