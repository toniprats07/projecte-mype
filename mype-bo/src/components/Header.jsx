import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 header text-color">
      <div className="text-xl font-bold">Mype</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Mype</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;