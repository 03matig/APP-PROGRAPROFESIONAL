import './styles/Course_styles.css';
import { Navbar }   from './Navbar';
import { useNavigate } from 'react-router-dom';

export const Course = () => {
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/Pasantia');
    };
    
    const handleNavigationZoom = () => {
        navigate('/VistaCrearZoom');
    };

    const handleViewParticipants = () => {
        navigate('/Participantes')
    }

    console.log('El rol del usuario es ' + userRole);
return (
<div> 
<div id="page" data-region="mainpage" data-usertour="scroller" className="drag-container">
        
        <section id="region-fullwidthtop-blocks" className="has-blocks" aria-label="region top blocks">
            <div role="main">
                
                <aside id="block-region-full-width-top" className="block-region" data-blockregion="full-width-top" data-droptarget="1"></aside>
            </div>
        </section>
        <div id="topofscroll" className="main-inner">
            

                

            <div className="container" id="yui_3_17_2_1_1712096122004_606">
            <div className="drawer-toggles d-flex" id="yui_3_17_2_1_1712096122004_605">
                    <div className="drawer-toggler drawer-left-toggle open-nav d-print-none" id="yui_3_17_2_1_1712096122004_604">
                    </div>
                    
            </div>
            <header id="page-header" className="header-maxwidth d-print-none">
    <div className="w-100 header-wrapper" id="yui_3_17_2_1_1712096122004_613">
        <div className="d-flex flex-wrap">
            <div id="page-navbar">
                <nav aria-label="Barra de navegación">
    <ol className="breadcrumb m-0"></ol>
</nav>
            </div>
        </div>
        <div className="d-flex align-items-center" id="yui_3_17_2_1_1712096122004_612">
            <div className="dashboard-bar-wrapper" id="yui_3_17_2_1_1712096122004_611">
                        <div className="page-context-header" id="yui_3_17_2_1_1712096122004_610"><div className="page-header-headings"><h1 className="h2 header-heading">PASANTÍA Sec.1 STGO S-SEM. 2024/1</h1></div></div>
            </div>
            <div className="header-actions-container " data-region="header-actions-container">
            </div>
        </div>
    </div>
</header>



                <div className="secondary-navigation edw-tabs-navigation d-print-none">
                    <nav className="moremenu navigation observed">
                        <ul id="moremenu-660c83787c4fc-nav-tabs" role="menubar" className="nav more-nav nav-tabs">
                                        <li data-key="coursehome" className="nav-item" role="none" data-forceintomoremenu="false" title="Curso">
                                                    <a role="menuitem" className="nav-link active active_tree_node " href="https://webc.uai.cl/course/view.php?id=8075" aria-current="true">
                                                        Curso
                                                    </a>
                                        </li>
                                        <li data-key="participants" className="nav-item" role="none" data-forceintomoremenu="false" title="Participantes">
                                                    <a onClick={handleViewParticipants} role="menuitem" className="nav-link  " href="#" tabIndex="-1">
                                                        Participantes
                                                    </a>
                                        </li>
                                        <li data-key="grades" className="nav-item" role="none" data-forceintomoremenu="false" title="Calificaciones">
                                                    <a role="menuitem" className="nav-link  " href="https://webc.uai.cl/grade/report/index.php?id=8075" tabIndex="-1">
                                                        Calificaciones
                                                    </a>
                                        </li>
                                        <li data-key="competencies" className="nav-item" role="none" data-forceintomoremenu="false" title="Competencias">
                                                    <a role="menuitem" className="nav-link  " href="https://webc.uai.cl/admin/tool/lp/coursecompetencies.php?courseid=8075" tabIndex="-1">
                                                        Competencias
                                                    </a>
                                        </li>
                                        
                            <li role="none" className="nav-item dropdown dropdownmoremenu" data-region="morebutton">
                                <a className="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-660c83787c4fc" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabIndex="-1">
                                    <span className="edw edw-icon-more"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-left" data-region="moredropdown" aria-labelledby="moremenu-dropdown-660c83787c4fc" role="menu">
                                <li data-key="unenrolself" className="nav-item" role="none" data-forceintomoremenu="true" title="Darme de baja en pasantia-1-1-2024">
                                                    <a role="menuitem" className="dropdown-item" href="https://webc.uai.cl/enrol/self/unenrolself.php?enrolid=32703" tabIndex="-1">
                                                        Darme de baja en pasantia-1-1-2024
                                                    </a>
                                        </li></ul>
                            </li>
                        </ul>
                    </nav>
                </div>

<div id="page-content" className="pb-4 d-print-block">
    <div id="region-main-box">
        <section id="region-main" aria-label="Contenido">
            <span className="notifications" id="user-notifications"></span>
            <div role="main"><span id="maincontent"></span><div className="course-content"><div id="course-format-660c8378ddac8660c83787226530" className="stateready">
    <h2 className="accesshide">Diagrama de temas</h2>
    
    <ul className="topics" data-for="course_sectionlist">
                <li id="section-0" className="section course-section main  clearfix
                             
                            " data-sectionid="0" data-sectionreturnid="0" data-for="section" data-id="111648" data-number="0" data-indexed="true">
                    <div className="course-section-header d-flex" data-for="section_title" data-id="111648" data-number="0">
                                
                                        <div className="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 className="sectionid-111648-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection0" data-for="section_title" data-id="111648" data-number="0">
                                                General
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse0" id="collapssesection0" aria-expanded="true" aria-controls="coursecontentcollapse0" className="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="General">
                                            <span className="expanded-icon icon-no-margin" title="Colapsar">
                                                <span className="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span className="collapsed-icon icon-no-margin" title="Expandir">
                                                <span className="dir-rtl-hide p-0">
                                                    <span className="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span className="dir-ltr-hide p-0">
                                                    <span className="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" className="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse0" className="content 
                                    course-content-item-content collapse show
                                ">
                                <div className=" r-my-6" data-for="sectioninfo">
                                        <div className="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul className="section m-0 p-0 img-text  d-block " data-for="cmlist">
                                                <li className="activity activity-wrapper forum modtype_forum   " id="module-332560" data-for="cmitem" data-id="332560" data-indexed="true">
                                                        <div className="activity-item " data-activityname="Avisos">

                                                                <div className="activity-basis d-flex align-items-center">
                                                                    <div className="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div className="activity-instance d-flex flex-column">
                                                                                        <div className="activitytitle media  modtype_forum position-relative align-self-start">
                                                                                            <div className="activityiconcontainer collaboration courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/forum/1712049482/monologo?filtericon=1" className="activityicon " alt="forum icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div className="media-body align-self-center">
                                                                                                <div className="small h-regular-5 text-font-small">
                                                                                                    Foro
                                                                                                </div>
                                                                                                <div className="activityname h-bold-4 color-font-headings">
                                                                                                                <a href="https://webc.uai.cl/mod/forum/view.php?id=332560" className=" aalink stretched-link" >        <span className="instancename">Avisos <span className="accesshide "> Foro</span></span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                
                                                                            <div className="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="Avisos" className="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div className="description">
                                                                </div>
                                                        </div>
                                                </li>
                                                <li className="activity activity-wrapper resource modtype_resource   " id="module-344094" data-for="cmitem" data-id="344094" data-indexed="true">
                                                        <div className="activity-item " data-activityname="PROGRAMA DEL CURSO">

                                                                <div className="activity-basis d-flex align-items-center">
                                                                    <div className="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div className="activity-instance d-flex flex-column">
                                                                                        <div className="activitytitle media  modtype_resource position-relative align-self-start">
                                                                                            <div className="activityiconcontainer content courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/core/1712049482/f/document-24" className="activityicon " alt="resource icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div className="media-body align-self-center">
                                                                                                <div className="small h-regular-5 text-font-small">
                                                                                                    Recurso
                                                                                                </div>
                                                                                                <div className="activityname h-bold-4 color-font-headings">
                                                                                                                <a href="https://webc.uai.cl/mod/resource/view.php?id=344094" className=" aalink stretched-link" >        <span className="instancename">PROGRAMA DEL CURSO <span className="accesshide "> Archivo</span></span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                
                                                                            <div className="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="PROGRAMA DEL CURSO" className="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div className="description">
                                                                </div>
                                                        </div>
                                                </li>
                                               
                                                
                                                
                                        </ul>
                            
                    </div>
                </li>
                <li id="section-1" className="section course-section main  clearfix
                             
                            " data-sectionid="1" data-sectionreturnid="0" data-for="section" data-id="111649" data-number="1" data-indexed="true">
                    <div className="course-section-header d-flex" data-for="section_title" data-id="111649" data-number="1">
                                
                                        <div className="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 className="sectionid-111649-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection1" data-for="section_title" data-id="111649" data-number="1">
                                                Feedback entregas pasantía
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse1" id="collapssesection1" aria-expanded="true" aria-controls="coursecontentcollapse1" className="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="FEEDBACK">
                                            <span className="expanded-icon icon-no-margin" title="Colapsar">
                                                <span className="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span className="collapsed-icon icon-no-margin" title="Expandir">
                                                <span className="dir-rtl-hide p-0">
                                                    <span className="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span className="dir-ltr-hide p-0">
                                                    <span className="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" className="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse1" className="content 
                                    course-content-item-content collapse show
                                ">
                                <div className=" r-my-6" data-for="sectioninfo">
                                        <div className="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul className="section m-0 p-0 img-text  d-block " data-for="cmlist">
                                        </ul>
                            
                    </div>
                </li>

                <li id="section-3" className="section course-section main  clearfix
                             
                            " data-sectionid="3" data-sectionreturnid="0" data-for="section" data-id="111651" data-number="3" data-indexed="true">
                    <div className="course-section-header d-flex" data-for="section_title" data-id="111651" data-number="3">
                                
                                        <div className="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 className="sectionid-111651-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection3" data-for="section_title" data-id="111651" data-number="3">
                                                AVANCES
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse3" id="collapssesection3" aria-expanded="true" aria-controls="coursecontentcollapse3" className="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="PROYECTOS">
                                            <span className="expanded-icon icon-no-margin" title="Colapsar">
                                                <span className="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span className="collapsed-icon icon-no-margin" title="Expandir">
                                                <span className="dir-rtl-hide p-0">
                                                    <span className="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span className="dir-ltr-hide p-0">
                                                    <span className="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" className="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse3" className="content 
                                    course-content-item-content collapse show
                                ">
                                <div className=" r-my-6" data-for="sectioninfo">
                                        <div className="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul className="section m-0 p-0 img-text  d-block " data-for="cmlist">
            
                                                <li className="activity activity-wrapper turnitintooltwo modtype_turnitintooltwo   " id="module-391568" data-for="cmitem" data-id="391568" data-indexed="true">
                                                        <div className="activity-item " data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL">

                                                                <div className="activity-basis d-flex align-items-center">
                                                                    <div className="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div className="activity-instance d-flex flex-column">
                                                                                        <div className="activitytitle media  modtype_turnitintooltwo position-relative align-self-start">
                                                                                            <div className="activityiconcontainer other courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/turnitintooltwo/1712049482/monologo" className="activityicon " alt="turnitintooltwo icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div className="media-body align-self-center">
                                                                                                <div className="activityname h-bold-4 color-font-headings">
                                                                                                                <a className=" aalink stretched-link" >     <span className="instancename" onClick={handleNavigation}>ENTREGA INFORME DE PASANTÍA</span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    
                                                                
                                                                            <div className="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL" className="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div className="description">
                                                                </div>
                                                        </div>
                                                </li>
                                                <li className="activity activity-wrapper turnitintooltwo modtype_turnitintooltwo   " id="module-391568" data-for="cmitem" data-id="391568" data-indexed="true">
                                                        <div className="activity-item " data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL">

                                                                <div className="activity-basis d-flex align-items-center">
                                                                    <div className="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                        
                                                                                    {userRole === 'profesorUniversidad' || userRole === 'adminUniversidad' ? (
                                                                                    <>
                                                                                    <div className="activity-instance d-flex flex-column">
                                                                                        <div className="activitytitle media  modtype_turnitintooltwo position-relative align-self-start">
                                                                                            <div className="activityiconcontainer content courseicon color align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/url/1715241806/monologo?filtericon=1" className="activityicon " alt="url icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div className="media-body align-self-center">
                                                                                                <div className="activityname h-bold-4 color-font-headings">
                                                                                                                <a className=" aalink stretched-link" onClick={handleNavigationZoom}>     <span className="instancename">CREAR LINK DE ZOOM</span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </>
                                                                                    ) : null}
                                                                                    
                                                                
                                                                            <div className="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL" className="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div className="description">
                                                                </div>
                                                        </div>
                                                </li>
                                                

                                                
                                        </ul>
                            
                    </div>
                </li>


                <li id="section-6" className="section course-section main  clearfix
                             
                            " data-sectionid="6" data-sectionreturnid="0" data-for="section" data-id="111654" data-number="6" data-indexed="true">
                    <div className="course-section-header d-flex" data-for="section_title" data-id="111654" data-number="6">
                                
                                        <div className="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 className="sectionid-111654-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection6" data-for="section_title" data-id="111654" data-number="6">
                                                Nuevo tema
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse6" id="collapssesection6" aria-expanded="true" aria-controls="coursecontentcollapse6" className="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="Tema 6">
                                            <span className="expanded-icon icon-no-margin" title="Colapsar">
                                                <span className="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span className="collapsed-icon icon-no-margin" title="Expandir">
                                                <span className="dir-rtl-hide p-0">
                                                    <span className="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span className="dir-ltr-hide p-0">
                                                    <span className="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" className="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse6" className="content 
                                    course-content-item-content collapse show
                                ">
                                <div className=" r-my-6" data-for="sectioninfo">
                                        <div className="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul className="section m-0 p-0 img-text " data-for="cmlist">
                                        </ul>
                            
                    </div>
                </li>
                
    </ul>
</div></div></div>
            
            

        </section>
    </div>
</div>


</div>
    </div>
    </div>
    </div>
)
}
