import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 header text-color">
      <div className="navbar">
        <div className="navbar-start">
          <a href='/'>
            <img src='https://www.mype.com/wp-content/uploads/2024/01/Logo-MYPE.png' alt='Mype Logo' className='h-12'></img>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Sobre Mype</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Botón de menú/desplegable */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost ml-40" onClick={toggleMenu}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </div>
          
          {/* Menú desplegable */}
          <ul
            tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow box-color rounded-box w-full text-2xl ${menuOpen ? 'visible' : 'hidden'}`}>
            <li><Link to="/home" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/nosotros" onClick={toggleMenu}>Sobre Mype</Link></li>
            <li><Link to="/servicios" onClick={toggleMenu}>Servicios</Link></li>
            <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
            <li><Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;