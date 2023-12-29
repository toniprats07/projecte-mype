import React from 'react';

const Footer = () => {
    return (
        <footer className="text-color py-4">
            <div className="container mx-auto flex justify-center items-center">
            <div className="flex items-center">
                <p className="mr-10">Mype</p>
                <span className="mr-10"> &bull; </span>
                <p className="mr-10">Tel. 93.588.51.59</p>
                <span className="mr-10"> &bull; </span>
                <p className="mr-10">Fax. 93.588.51.42</p>
                <span className="mr-10"> &bull; </span>
                <p className="mr-10">info@mype.com</p>
                <span className="mr-10"> &bull; </span>
                <a href="#condiciones-venta" className="text-color">Condiciones de Venta</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
