import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Participantes_styles.css';

export const Participantes = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [presidencia, setPresidencia] = useState({});
    const nombre = localStorage.getItem('nombre');
    const userId = localStorage.getItem('userId');
    const carrera = localStorage.getItem('carrera');
    const rol = localStorage.getItem("userRole");
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/Course');
    }

    const fetchAlumnos = async () => {
        console.log("Enviando request al backend");
        try {
            const response = await fetch('http://localhost:5000/alumnos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.info("API Fetch exitoso");
                const data = await response.json();
                console.log("Datos recibidos:", data);
                setAlumnos(data);
                const presidencias = {};
                for (const alumno of data) {
                    for (const prof of Object.values(alumno.profesores)) {
                        if (prof.id === userId && prof.President === 'yes') {
                            presidencias[alumno.username] = 'Sí';
                            break;
                        }
                    }
                    if (!presidencias[alumno.username]) {
                        presidencias[alumno.username] = 'No';
                    }
                }
                setPresidencia(presidencias);
            } else {
                const errorData = await response.json();
                console.error('Error fetching alumnos:', response.status, response.statusText, errorData);
            }
        } catch (error) {
            console.error('Error fetching alumnos:', error);
        }
    };

    useEffect(() => {
        fetchAlumnos();
    }, []);

    const inscribirProfesor = async (alumnoUsername) => {
        try {
            const response = await fetch('http://40.76.107.0:5000/inscribir_profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    alumno_username: alumnoUsername,
                    profesor_id: userId,
                    profesor_nombre: nombre,
                    profesor_carrera: carrera
                })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Profesor inscrito con éxito:', data.message);
                // Actualizamos la lista de alumnos después de inscribir un profesor
                fetchAlumnos();
                // Actualizamos el estado de presidencia para el alumno inscrito
                setPresidencia(prevPresidencia => ({
                    ...prevPresidencia,
                    [alumnoUsername]: data.presidente ? 'Sí' : 'No'
                }));
            } else {
                console.error('Error inscribiendo profesor:', data.error);
            }
        } catch (error) {
            console.error('Error inscribiendo profesor:', error);
        }
    };

    const descargarInforme = async (fileId) => {
        try {
            console.debug("Enviando solicitud para descargar el archivo con fileId:", fileId);
            const response = await fetch(`http://40.76.107.0:5000/download_pdf?fileId=${fileId}`, {
                method: 'GET'
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'informe_pasantia.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.info("Archivo descargado exitosamente");
            } else {
                console.error('Error descargando el informe:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error descargando el informe:', error);
        }
    };

    return (
        <div>
            <div className="separacion">
                <div id="page-navbar">
                    <nav aria-label="Barra de navegación">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item" onClick={handleNavigation}>
                                <a href="#" title="PASANTÍA Sec.1 STGO S-SEM. 2024/1">PASANTÍA Sec.1 STGO S-SEM. 2024/1</a>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h1 className="titulo">Participantes</h1>
            </div>
            <div className="table-container">
                {alumnos.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Comisión</th>
                                <th className="table-capacity">Capacidad</th>
                                <th>Presidencia de la comisión</th>
                                <th>Informe PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map(alumno => (
                                <tr key={alumno.username}>
                                    <td>{alumno.nombre}</td>
                                    <td>
                                        <button onClick={() => inscribirProfesor(alumno.username)}>
                                            Inscribirse
                                        </button>
                                    </td>
                                    <td className="table-capacity">
                                        {alumno.profesores 
                                            ? `${Object.values(alumno.profesores).filter(prof => prof.Nombre).length}/3`
                                            : '0/3'}
                                    </td>
                                    <td>
                                        {presidencia[alumno.username] || 'No'}
                                    </td>
                                    <td>
                                        {alumno['internship-defense'] && alumno['internship-defense']['internship-report-pdf'] ? (
                                            <button onClick={() => descargarInforme(alumno['internship-defense']['internship-report-pdf'])}>
                                                Descargar informe de pasantía
                                            </button>
                                        ) : (
                                            <div>
                                                <button disabled>Descargar informe de pasantía</button>
                                                <p className="error-message">El alumno seleccionado no ha adjuntado su Informe</p>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
