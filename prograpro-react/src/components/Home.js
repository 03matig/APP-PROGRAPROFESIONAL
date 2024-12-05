import React from 'react';
import './styles/Home_styles.css';
import { useNavigate } from 'react-router-dom';
import './imagenes/plataforma-academica-pregrado.png';
import { Navbar } from './Navbar';


export function Home ({ user, setUser }) {
    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const userRole = localStorage.getItem('userRole');

    const handleclick = () => {
        navigate("/Course");
    };

    return (
        <div>
            <div id="page" data-region="mainpage" data-usertour="scroller" className="drag-container">
                <section id="region-fullwidthtop-blocks" className="has-blocks" aria-label="region top blocks">
                    <div role="main">
                        <aside id="block-region-full-width-top" className="block-region" data-blockregion="full-width-top" data-droptarget="1">
                        </aside>
                    </div>
                </section>
                <div id="topofscroll" className="main-inner">
                    <div className="frontpage-sections container-fluid p-0">
                        <section id="edwiser-slider">
                            <div className="cover card card-inverse rem-staticimage border-0">
                                <div id="header-image" className="col-12"></div>
                                <div className="carousel-caption cover-background centered card-img-overlay white">
                                <div className="text_to_html"></div>
                                </div>
                            </div>
                        </section>        
                    </div>
                    <div className="container">
                        <header id="page-header" className="header-maxwidth d-print-none">
                            <div className="w-100 header-wrapper">
                                <div className="d-flex flex-wrap">
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dashboard-bar-wrapper">
                                        <div className="page-context-header">
                                            <div className="page-header-headings">
                                                <h1 className="h2 header-heading">
                                                    ¡Hola, {nombre}!
                                                </h1>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="header-actions-container " data-region="header-actions-container">
                                    </div>
                                </div>
                            </div>
                        </header>

        <div id="page-content" className="pb-3 d-print-block">
            <div id="region-main-box">
                <section id="region-main" aria-label="Contenido">
                    <span className="notifications" id="user-notifications"></span>
                    <div role="main"><span id="maincontent"></span>
                    <div id="frontpage-course-list"><h2>Mis cursos</h2><div className="courses frontpage-course-list-enrolled"><div className="coursebox clearfix odd first" data-courseid="11217" data-type="1"><div className="info"><h3 className="coursename"><a className="aalink" href="https://webc.uai.cl/course/view.php?id=11217">Alumnos S-SEM. 2024/1</a></h3><div className="moreinfo"></div><div className="enrolmenticons"><i className="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div className="content"><div className="d-flex image-flex"><div className="flex-grow-1"><div className="customfields-container"><div className="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div className="coursebox clearfix even" data-courseid="10626" data-type="1"><div className="info"><h3 className="coursename"><button onClick={() => handleclick()}  className="aalink">PASANTÍA Sec.1 STGO S-SEM. 2024/1</button></h3><div className="moreinfo"></div><div className="enrolmenticons"><i className="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div className="content"><div className="d-flex"><div className="flex-grow-1"><ul className="teachers"><li className='marker'><span className="font-weight-bold">Profesor guía: </span> <button onClick={() => handleclick()} className="profesor" ><span className="profesor">Jorge Almirón</span></button></li></ul><div className="customfields-container"><div className="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div className="coursebox clearfix odd" data-courseid="1526" data-type="1"><div className="info"><h3 className="coursename"><a className="aalink" href="https://webc.uai.cl/course/view.php?id=1526">Centro de Asesoramiento y Desarrollo Estudiantil Santiago (CADE STGO.)</a></h3><div className="moreinfo"></div><div className="enrolmenticons"><i className="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div className="content"><div className="d-flex"><div className="flex-grow-1"><div className="customfields-container"><div className="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div className="coursebox clearfix even" data-courseid="1740" data-type="1"><div className="info"><h3 className="coursename"><a className="aalink" href="https://webc.uai.cl/course/view.php?id=1740">DAE Santiago</a></h3><div className="moreinfo"></div><div className="enrolmenticons"><i className="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div className="content"><div className="d-flex"><div className="flex-grow-1"><div className="summary"><div className="no-overflow"><p>Revisa toda la información de la universidad y nuestro campus Peñalolén: Iniciativas estudiantiles, Becas, Talleres, Eventos y más</p></div></div><div className="customfields-container"><div className="customfield customfield_select customfield_edwskilllevel">
                            
            </div></div></div></div></div></div><div className="coursebox clearfix even" data-courseid="3743" data-type="1"><div className="info"><h3 className="coursename"><a className="aalink" href="https://webc.uai.cl/course/view.php?id=3743">SECRETARÍA GENERAL UAI</a></h3><div className="moreinfo"></div></div><div className="content"><div className="d-flex"><div className="flex-grow-1"><div className="summary"><div className="no-overflow"><p>En este curso&nbsp;encontrarán un Boletín con temas legales relevantes para ustedes, y carpetas con información importante de <a className="autolink" title="TEMAS ACADÉMICOS" href="https://webc.uai.cl/mod/folder/view.php?id=185881">temas académicos</a>, disciplinarios, entre otros.</p></div></div><div className="customfields-container"><div className="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div>
            <div className="paging paging-morelink"><a className="btn btn-secondary" href="https://webc.uai.cl/course/index.php">Todos los cursos</a></div></div></div><span className="skip-block-to" id="skipmycourses"></span><br/></div>
                    
                    

                </section>
            </div>
        </div>




        </div>
            </div>
            </div>
        </div>
    )

}
