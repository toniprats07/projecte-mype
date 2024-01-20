import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#192A34] p-10 text-primary-content">
            <aside>
                <img src='https://www.mype.com/wp-content/uploads/2024/01/Logo-MYPE.png' alt='Mype Logo' className='h-8 mb-10'></img>
                <div className="container mx-auto flex sm:flex-col lg:flex-row justify-center items-center text-center sm:text-left mb-10">
                    <p className="mb-2 md:mb-0 md:mr-10 text-color sm:text-2xl lg:text-xl">Tel. 93.588.51.59</p>
                    <span className="sm:hidden lg:inline md:mr-10 text-color"> &bull; </span>
                    <p className="mb-2 md:mb-0 md:mr-10 text-color sm:text-2xl lg:text-xl">Fax. 93.588.51.42</p>
                    <span className="sm:hidden lg:inline md:mr-10 text-color"> &bull; </span>
                    <p className="mb-2 md:mb-0 md:mr-10 text-color sm:text-2xl lg:text-xl">mype@mype.com</p>
                    <span className="sm:hidden lg:inline md:mr-10 text-color"> &bull; </span>
                    <a href="#condiciones-venta" className="mb-2 md:mb-0 md:mr-10 text-color sm:text-2xl lg:text-xl">Política de privacidad</a>
                </div> 
                <p className='text-color sm:text-2xl lg:text-xl'>Copyright © 2024 - Todos los derechos reservados</p>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="URL_DE_TU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FaLinkedin size={30} color="#D7EAF4" />
                    </a>
                    <a href="URL_DE_TU_INSTAGRAM" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} color="#D7EAF4" />
                    </a>
                </div>
            </nav>
        </footer>    
  );
}

export default Footer;
