import React, { useState } from "react";
import { Navbar } from "./Navbar";
import './styles/Pasantia_styles.css';
import { useNavigate } from "react-router-dom";

export const Pasantia = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [fileName, setFileName] = useState("");
    const [uploading, setUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const handleNavigation = () => {
        navigate('/Course');
    };

    const openModal = (modalType) => {
        if (modalType === 'edit') {
            setEditModalOpen(true);
        } else if (modalType === 'delete') {
            setDeleteModalOpen(true);
        }
    };

    const closeModal = (modalType) => {
        if (modalType === 'edit') {
            setEditModalOpen(false);
        } else if (modalType === 'delete') {
            setDeleteModalOpen(false);
        }
        setUploadProgress(0);
        setUploading(false);
        setUploadComplete(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setFileName(file.name);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('internship-report-pdf', selectedFile);
        formData.append('userId', userId);

        setUploading(true);
        setUploadComplete(false);

        try {
            console.debug("Enviando request al backend...");
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            });

            if (response.ok) {
                console.log('Archivo subido exitosamente');
                setUploadComplete(true);
                const data = await response.json();
                console.info("Información del documento:", data);
                closeModal('edit');
            } else {
                console.error('Error al subir el archivo');
            }
        } catch (error) {
            console.error('Error en la solicitud', error);
        } finally {
            setUploading(false);
        }
    };

    const handleFileDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/delete?userId=${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Archivo borrado exitosamente');
                closeModal('delete');
            } else {
                console.error('Error al borrar el archivo');
            }
        } catch (error) {
            console.error('Error en la solicitud', error);
        }
    };

    return (
        <div>
            <div id="topofscroll" className="main-inner">
                <div className="container">
                    <header id="page-header" className="header-maxwidth d-print-none">
                        <div className="w-100 header-wrapper">
                            <div className="d-flex flex-wrap">
                                <div id="page-navbar">
                                    <nav aria-label="Barra de navegación">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item" onClick={handleNavigation}>
                                                <a href="" title="PASANTÍA Sec.1 STGO S-SEM. 2024/1">PASANTÍA Sec.1 STGO S-SEM. 2024/1</a>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="dashboard-bar-wrapper">
                                    <div className="page-context-header">
                                        <div className="page-header-image mr-2">
                                            <div className="assessment activityiconcontainer modicon_assign">
                                                <img className="icon activityicon" alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/assign/1715241806/monologo">
                                                </img>
                                            </div>
                                        </div>
                                        <div className="page-header-headings">
                                            <div className="text-muted text-uppercase small line-height-3">Tarea</div>
                                            <h1 className="h2 header-heading">Entrega Informe de Pasantía</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-actions-container " data-region="header-actions-container">
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="page-content" className="pb-4 d-print-block">
                        <div id="box-reg-ppal">
                            <div className="activity-header" data-for="page-activity-header" styles={{ color: '#657187' }}>
                                <div data-region="activity-information" data-activityname="Entrega Video Presentación de Avance 1" className="activity-information">
                                    <div data-region="activity-dates" className="activity-dates">
                                        <div className="description-inner">
                                            <div>
                                                <strong>Apertura:</strong> viernes, 26 de abril de 2024, 00:00
                                            </div>
                                            <div>
                                                <strong>Cierre:</strong> domingo, 28 de abril de 2024, 23:59
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="activity-description" id="intro">
                                    <div className="box py-3 generalbox boxaligncenter">
                                        <div className="no-overflow">
                                            <p>Registre directamente el link de YouTube.</p><p>Solo es necesaria una entrega por grupo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="main-caja-blanca" role="main" styles={{ background: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 13px 37px rgba(92, 107, 121, .1)' }}>
                                <div className="mb-4">
                                    <div className="row">
                                        <div className="col-xs-6 mr-3">
                                            <div className="singlebutton">
                                                <form method="get" action="">
                                                    <input type="hidden" name="id" value="445618"></input>
                                                    <input type="hidden" name="action" value="editsubmission"></input>
                                                    <button type="submit" className="btn btn-secondary" id="single_button6661de3a2ce976" onClick={(event) => { event.preventDefault(); openModal('edit'); }}>Añadir/Editar entrega</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="singlebutton">
                                                <form method="get" action="">
                                                    <input type="hidden" name="id" value="445618"></input>
                                                    <input type="hidden" name="action" value="removesubmissionconfirm"></input>
                                                    <button type="submit" className="btn btn-secondary" id="single_button6661de3a2ce977" onClick={(event) => { event.preventDefault(); openModal('delete'); }}>Borrar entrega</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {isEditModalOpen && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={() => closeModal('edit')}>&times;</span>
                                                <p>Edita tu entrega aquí...</p>
                                                <button className="btn btn-primary" onClick={() => document.getElementById('fileInput').click()}>Seleccionar archivos</button>
                                                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                                                {fileName && <p>Archivo seleccionado: {fileName}</p>}
                                                {selectedFile && (
                                                    <div>
                                                        <progress value={uploadProgress} max="100"></progress>
                                                        <p>{uploadProgress}%</p>
                                                    </div>
                                                )}
                                                <button className="btn btn-secondary" onClick={handleFileUpload} disabled={uploading}>Subir archivo</button>
                                            </div>
                                        </div>
                                    )}
                                    {isDeleteModalOpen && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={() => closeModal('delete')}>&times;</span>
                                                <p>¿Estás seguro de que deseas borrar tu entrega?</p>
                                                <button className="btn btn-danger" onClick={handleFileDelete}>Borrar archivo</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="submissionstatustable">
                                    <h3>Estado de la entrega</h3>
                                    <div className="box py-3 boxaligncenter submissionsummarytable">
                                        <div className="table-responsive">
                                            <table className="generaltable table-bordered">
                                                <tbody>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Grupo</th>
                                                        <td className="cell c1 lastcol">Sin asignar</td>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Estado de la entrega</th>
                                                        <td className="submissionstatussubmitted cell c1 lastcol">Enviado para calificar</td>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Estado de la calificación</th>
                                                        <td className="submissionnotgraded cell c1 lastcol">Sin calificar</td>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Tiempo restante</th>
                                                        <td className="latesubmission cell c1 lastcol">La tarea fue enviada 1 hora 33 minutos después</td>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Última modificación</th>
                                                        <td className="cell c1 lastcol">lunes, 29 de abril de 2024, 01:32</td>
                                                    </tr>
                                                    <tr className="">
                                                        <th className="cell c0" scope="row">Texto en línea</th>
                                                        <td className="cell c1 lastcol">
                                                            <div className="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_onlinetext_772639">
                                                                <a className="expandsummaryicon expand_assignsubmission_onlinetext_772639" aria-label="Ver completo" role="button" aria-expanded="false" href="">
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="lastrow">
                                                        <th className="cell c0" scope="row">Comentarios de la entrega</th>
                                                        <td className="cell c1 lastcol">
                                                            <div className="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_comments_772639">
                                                                <div className="commentscontainer">
                                                                    <div style={{ display: 'none' }} id="cmt-tmpl">
                                                                        <div className="comment-message">
                                                                            <div className="comment-message-meta mr-3">
                                                                                <span className="picture">___picture___</span>
                                                                                <span className="user">___name___</span> - <span className="time">___time___</span>
                                                                            </div>
                                                                            <div className="text">___content___</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mdl-left">
                                                                        <a className="comment-link" id="comment-link-6661de3a466a5" href="#" role="button" aria-expanded="false">
                                                                            <i className="icon fa fa-caret-right fa-fw " title="Comentarios" role="img" aria-label="Comentarios"></i>
                                                                            <span id="comment-link-text-6661de3a466a5">Comentarios (0)</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
