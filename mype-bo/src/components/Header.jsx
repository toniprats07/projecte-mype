import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center">
      <a href="/" className="flex items-center">
        <img src="https://www.mype.com/wp-content/uploads/2024/01/Logo-MYPE.png" alt="Mype Logo" className="h-12" />
      </a>

      {/* Botón de menú hamburguesa para móviles */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        <svg className="w-20 h-20" fill="none" stroke="white" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú de navegación */}
      <nav className={`lg:flex ${isOpen ? 'flex' : 'hidden'} z-[1] flex-col lg:flex-row absolute lg:relative w-full lg:w-auto color-menu lg:bg-transparent left-0 lg:left-auto top-24 lg:top-auto transition-top duration-300 ease-in-out`}>
        <ul className="flex flex-col lg:flex-row items-center lg:items-stretch">
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Inicio</a>
          </li>
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/nosotros" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Sobre Mype</a>
          </li>
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/servicios" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Servicios</a>
          </li>
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/proyectos" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Proyectos</a>
          </li>
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/catalogo" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Catálogo</a>
          </li>
          <li className="my-4 lg:my-2 lg:mx-4">
            <a href="/contacto" className="text-color sm:text-5xl lg:text-xl hover:text-yellow-500">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
