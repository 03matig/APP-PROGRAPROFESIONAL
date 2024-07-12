import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/argon-dashboard.css?v=2.0.4';
import './assets/css/dashboard_styles.css';
import PieChart from './PieChart';
import BarChart from './BarChart';
import BarChartNew from './BarChartNew';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { SideNavDashboard } from './SideNavDashboard';
import { DashboardNavbar } from './DashboardNavbar';


export const Dashboard = () => {
  const navigate = useNavigate();

  const [sidebarColor, setSidebarColor] = useState('defaultColor');
  const [sidebarType, setSidebarType] = useState('defaultType');

  return (

      <div className="dashboard-container">
        <div className="dashboard-content">
          <SideNavDashboard className="sidenav" />
          <main className="dashboard-main">
          <div className="charts-container">
            <div className="container-fluid py-4">

            <div className="row mt-4">
              <div className="col-lg-7 mb-lg-0 mb-4">
                <div className="card z-index-2 h-100">
                  <div className="card-header pb-0 pt-3 bg-transparent">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-capitalize">Número de alumnos por empresa</h6>
                        <p className="text-sm mb-0">
                          <i className="fa fa-arrow-up text-success"></i>
                          <span className="font-weight-bold">Primer Semestre </span> año 2024
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="dropdown float-lg-end pe-4">
                          <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-v text-secondary"></i>
                          </a>
                          <ul className="dropdown-menu px-2 py-3 ms-sm-n8 ms-n3" aria-labelledby="dropdownTable">
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="chart">
                      <div style={{ width: '50%', margin: '0 auto' }}>
                       <PieChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card card-carousel overflow-hidden h-100 p-0">
                <div className="card-header pb-0 pt-3 bg-transparent">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-capitalize">Nota Final Promedio por Empresa</h6>
                        <p className="text-sm mb-0">
                          <i className="fa fa-arrow-up text-success"></i>
                          <span className="font-weight-bold">Primer Semestre </span> año 2024
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="dropdown float-lg-end pe-4">
                          <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-v text-secondary"></i>
                          </a>
                          <ul className="dropdown-menu px-2 py-3 ms-sm-n8 ms-n3" aria-labelledby="dropdownTable">
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="chart">
                   
                    <div>
                      <BarChart/>
                    </div>
          
                  </div>
                </div>
              </div>
               <div className="card-body p-3">
               <div className="card card-carousel overflow-hidden h-100 p-0">
               <div className="card-header pb-0 pt-3 bg-transparent">
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-capitalize">Nota Final Promedio de cada Carrera por Empresa</h6>
                        <p className="text-sm mb-0">
                          <i className="fa fa-arrow-up text-success"></i>
                          <span className="font-weight-bold">Primer Semestre </span> año 2024
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="dropdown float-lg-end pe-4">
                          <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-v text-secondary"></i>
                          </a>
                          <ul className="dropdown-menu px-2 py-3 ms-sm-n8 ms-n3" aria-labelledby="dropdownTable">
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="chart">
                      <div style={{ width: '50%', margin: '0 auto' }}>
                       <BarChartNew/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            <div className="fixed-plugin">
          <div className="fixed-plugin-button text-dark position-fixed px-3 py-2">
            <i className="fa fa-cog py-2"></i>
          </div>
          <div className="card shadow-lg">
            <div className="card-header pb-0 pt-3">
              <div className="float-start">
                <h5 className="mt-3 mb-0">Argon Configurator</h5>
                <p>See our dashboard options.</p>
              </div>
              <div className="float-end mt-4">
                <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </div>
            <hr className="horizontal dark my-1" />
            <div className="card-body pt-sm-3 pt-0">
              <div>
                <h6 className="mb-0">Sidebar Colors</h6>
              </div>
              <a href="javascript:void(0)" className="switch-trigger background-color">
                <div className="badge-colors my-2 text-start">
                  <span className="badge filter bg-gradient-primary active" data-color="primary" onClick={() => sidebarColor(this)}></span>
                  <span className="badge filter bg-gradient-dark" data-color="dark" onClick={() => sidebarColor(this)}></span>
                  <span className="badge filter bg-gradient-info" data-color="info" onClick={() => sidebarColor(this)}></span>
                  <span className="badge filter bg-gradient-success" data-color="success" onClick={() => sidebarColor(this)}></span>
                  <span className="badge filter bg-gradient-warning" data-color="warning" onClick={() => sidebarColor(this)}></span>
                  <span className="badge filter bg-gradient-danger" data-color="danger" onClick={() => sidebarColor(this)}></span>
                </div>
              </a>
              <div className="mt-3">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="text-sm">Choose between 2 different sidenav types.</p>
              </div>
              <div className="d-flex">
                <button className="btn bg-gradient-dark px-3 mb-2 active" data-className="bg-gradient-dark" onClick={() => sidebarType(this)}>Dark</button>
                <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-className="bg-transparent" onClick={() => sidebarType(this)}>Transparent</button>
                <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-className="bg-white" onClick={() => sidebarType(this)}>White</button>
              </div>
              <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
              <div className="d-flex my-3">
                <h6 className="mb-0">Navbar Fixed</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                  <input className="form-check-input mt-1 float-end" type="checkbox" id="navbarFixed" onClick="navbarFixed(this)" />
                </div>
              </div>
              <hr className="horizontal dark my-sm-4" />
              <div className="d-flex my-3">
                <h6 className="mb-0">Light / Dark</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                  <input className="form-check-input mt-1 float-end" type="checkbox" id="dark-version" onClick="darkMode(this)" />
                </div>
              </div>
              <hr className="horizontal dark my-sm-4" />
              <a className="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard">View documentation</a>
              <div className="w-100 text-center">
                <a className="github-button" href="https://github.com/creativetimofficial/argon-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
                <h6 className="mt-3">Thank you for sharing!</h6>
                <a href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20@CreativeTim%20#webdesign%20#dashboard%20#bootstrap5" className="btn btn-dark mb-0 me-2" target="_blank">
                  <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
                  <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>
          </main>
      </div>  
    </div>
      );
    };
    