import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/argon-dashboard.css?v=2.0.4';
import './assets/css/dashboard_styles.css';

export const DashboardNavbar = () => {
  return (
        <div>
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
            <div className="container-fluid py-0 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="javascript:;">Pasantías</a></li>
                  <li className="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard Director</li>
                </ol>
                <h6 className="font-weight-bolder text-white mb-0">Dashboard Director</h6>
              </nav>
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                </div>
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                      <i className="fa fa-user me-sm-1"></i>
                      <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-white p-0" id="iconNavbarSidenav">
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item px-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-white p-0">
                      <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                    </a>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-bell cursor-pointer"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New message</span> from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark me-3" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New album</span> by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary me-3 my-auto">
                              <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>credit-card</title>
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path className="color-background" d="M43,10.7485185 L43,3.58333333 C43,1.60337963 41.3966204,0 39.4166667,0 L3.58333333,0 C1.60337963,0 0,1.60337963 0,3.58333333 L0,10.7485185 L43,10.7485185 Z" opacity="0.593633743"></path>
                                        <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2299537 1.60337963,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3966204,35.8333333 43,34.2299537 43,32.25 L43,16.125 L0,16.125 Z M12.5833333,26.5833333 C12.5833333,27.375 11.9583333,28 11.1666667,28 L7.16666667,28 C6.375,28 5.75,27.375 5.75,26.5833333 L5.75,22.5833333 C5.75,21.7916667 6.375,21.1666667 7.16666667,21.1666667 L11.1666667,21.1666667 C11.9583333,21.1666667 12.5833333,21.7916667 12.5833333,22.5833333 L12.5833333,26.5833333 Z M23.9166667,26.5833333 C23.9166667,27.375 23.2916667,28 22.5,28 L18.5,28 C17.7083333,28 17.0833333,27.375 17.0833333,26.5833333 L17.0833333,22.5833333 C17.0833333,21.7916667 17.7083333,21.1666667 18.5,21.1666667 L22.5,21.1666667 C23.2916667,21.1666667 23.9166667,21.7916667 23.9166667,22.5833333 L23.9166667,26.5833333 Z M35.25,26.5833333 C35.25,27.375 34.625,28 33.8333333,28 L29.8333333,28 C29.0416667,28 28.4166667,27.375 28.4166667,26.5833333 L28.4166667,22.5833333 C28.4166667,21.7916667 29.0416667,21.1666667 29.8333333,21.1666667 L33.8333333,21.1666667 C34.625,21.1666667 35.25,21.7916667 35.25,22.5833333 L35.25,26.5833333 Z"></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  );
}
