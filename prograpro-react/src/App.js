import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Course } from './components/Course';
import { Pasantia } from './components/Pasantia';
import { VistaCrearZoom } from './components/VistaCrearZoom';
import { Navbar } from './components/Navbar';
import { SideNavDashboard } from './components/Empresas/SideNavDashboard';
import { DashboardNavbar } from './components/Empresas/DashboardNavbar';
import { Dashboard } from './components/Empresas/Dashboard';
import { Telefonica } from './components/Empresas/Telefonica';
import { Entel } from './components/Empresas/Entel';
import { Claro } from './components/Empresas/Claro';
import { VTR } from './components/Empresas/VTR';
import { Huawei } from './components/Empresas/Huawei';
import { BHP } from './components/Empresas/BHP';
import { Schneider } from './components/Empresas/Schneider';
import { Sacyr } from './components/Empresas/Sacyr';
import { Komatsu } from './components/Empresas/Komatsu';
import { Siemens } from './components/Empresas/Siemens';
import { TeacherList } from './components/Empresas/TeacherList';

function App() {
  const [user, setUser] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        
        <Route
          path="/*"
          element={
            <>
              <Navbar user={user} setUser={setUser} />
              <Routes>
                <Route path="Home" element={<Home user={user} setUser={setUser} />} />
                <Route path="Course" element={<Course user={user} setUser={setUser} />} />
                <Route path="/Participantes" element={<Participantes user={user} setUser={setUser} />} />
                <Route path="Pasantia" element={<Pasantia user={user} setUser={setUser} />} />
                <Route path="VistaCrearZoom" element={<VistaCrearZoom user={user} setUser={setUser} />} />
              </Routes>
            </>
          }
        />
        
        <Route
          path="/Dashboard/*"
          element={
            <>
           
              <Routes>
                <Route path="" element={<Dashboard user={user} setUser={setUser} />} />
                <Route path="Telefonica" element={<Telefonica user={user} setUser={setUser} />} />
                <Route path="Entel" element={<Entel user={user} setUser={setUser} />} />
                <Route path="Claro" element={<Claro user={user} setUser={setUser} />} />
                <Route path="VTR" element={<VTR user={user} setUser={setUser} />} />
                <Route path="Huawei" element={<Huawei user={user} setUser={setUser} />} />
                <Route path="BHP" element={<BHP user={user} setUser={setUser} />} />
                <Route path="Schneider" element={<Schneider user={user} setUser={setUser} />} />
                <Route path="Sacyr" element={<Sacyr user={user} setUser={setUser} />} />
                <Route path="Komatsu" element={<Komatsu user={user} setUser={setUser} />} />
                <Route path="Siemens" element={<Siemens user={user} setUser={setUser} />} />
                <Route path="TeacherList" element={<TeacherList user={user} setUser={setUser} />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;