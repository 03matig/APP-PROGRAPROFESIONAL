import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/argon-dashboard.css?v=2.0.4';
import './assets/css/dashboard_styles.css';
import {useNavigate} from 'react-router-dom';

export const SideNavDashboard = () => {

  const navigate = useNavigate();

  const navigateTeacherList = () => {
    navigate('./TeacherList');
  };


  const navigateTelefonica = () => {
    navigate('./Telefonica');
  };

  const navigateEntel = () => {
    navigate('./Entel');
  };

  const navigateClaro = () => {
    navigate('./Claro');
  };

  const navigateVTR = () => {
    navigate('./VTR');
  };

  const navigateHuawei = () => {
    navigate('./Huawei');
  };

  const navigateBHP = () => {
    navigate('./BHP');
  };

  const navigateSchneider = () => {
    navigate('./Schneider');
  };

  const navigateSacyr = () => {
    navigate('./Sacyr');
  };

  const navigateKomatsu = () => {
    navigate('./Komatsu');
  };

  const navigateSiemens = () => {
    navigate('./Siemens');
  };


    return (

        <div>
        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
        <div className="sidenav-header justify-content-center">
          <div>
          <a className="navbar-brand m-1">
            <span className="ms-2 font-weight-bold">Dashboards Estadísticas</span>
          </a>
          </div>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="sidenav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <div className="icon-container" >
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Estadísticas Generales</span>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateTeacherList}> 
                <div className="icon-container">
                  <i className="ni ni-building text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Estadísticas profesores</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateTelefonica}> 
                <div className="icon-container">
                  <i className="ni ni-building text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Telefonica</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateEntel}>
                <div className="icon-container">
                  <i className="ni ni-building  text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Entel</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateClaro}>
                <div className="icon-container">
                  <i className="ni ni-building text-info text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Claro</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateVTR}>
                <div className="icon-container">
                  <i className="ni ni-building text-danger text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">VTR</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateHuawei}>
                <div className="icon-container">
                  <i className="ni ni-building text-dark text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Huawei</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateBHP}>
                <div className="icon-container">
                  <i className="ni ni-building text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">BHP</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateSchneider}>
                <div className="icon-container">
                  <i className="ni ni-building text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Schneider</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateSacyr}>
                <div className="icon-container">
                  <i className="ni ni-building text-info text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Sacyr</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateKomatsu}>
                <div className="icon-container">
                  <i className="ni ni-building text-warning text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Komatsu</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick = {navigateSiemens}>
                <div className="icon-container">
                  <i className="ni ni-building text-primary text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Siemens</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      </div>
    )
}