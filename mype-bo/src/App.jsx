import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros/*" element={<Nosotros />} />
        <Route path="/servicios/*" element={<Servicios />} />
        <Route path="/proyectos/*" element={<Proyectos />} />
        <Route path="/catalogo/*" element={<Catalogo />} />
        <Route path="/contacto/*" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
