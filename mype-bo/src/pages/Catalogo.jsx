import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Catalogo = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://www.mype.com/wp-content/uploads/2024/01/fondo-servicios.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
    };

    const catalogData = [
        { id: 1, image: 'https://www.mype.com/wp-content/uploads/2024/01/Thumb_470.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/Catalogo_Producto_470_440.pdf', title: 'Producto 470 y 440' },
        { id: 2, image: 'https://www.mype.com/wp-content/uploads/2024/01/Thum_accesos.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/Catalogo_CAB-3_R031.pdf', title: 'Control de accesos' },
        { id: 3, image: 'https://www.mype.com/wp-content/uploads/2024/01/Thum_ferrov.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/FolderrailwayMYPE-2011-trac_.pdf', title: 'Sector ferroviario' },
        { id: 4, image: 'https://www.mype.com/wp-content/uploads/2024/01/Thum_FV.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/FoldersolarMYPE-2011trac_.pdf', title: 'Sector fotovoltaico' },
        { id: 5, image: 'https://www.mype.com/wp-content/uploads/2024/01/Thum_Corporativo.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/CorporatMYPE.pdf', title: 'Corporativo'},
        { id: 6, image: 'https://www.mype.com/wp-content/uploads/2024/01/thum_LAB.png', link: 'https://www.mype.com/wp-content/uploads/2024/01/Servicios-de-Laboratorio-CE.pdf', title: 'Laboratorio' },
        // Agrega más elementos según sea necesario
      ];

  return (
    <div>
        <Header />
        <div className="py-12 mx-auto sm:px-4 md:px-8" style={backgroundStyle}>
            <div className="flex flex-wrap -mx-4">
                {catalogData.map(item => (
                    <div key={item.id} className="w-1/2 lg:w-1/6 p-4 relative group">
                        <img src={item.image} alt={`Catálogo ${item.id}`} className="h-72 lg:h-64 w-full object-contain transition duration-300 ease-in-out group-hover:opacity-30" />
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <span className="text-color text-lg font-bold mb-2">{item.title}</span>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13a5 5 0 007.54 3.54l2.12-2.12a5 5 0 10-7.07-7.07l-1.41 1.41" stroke="#D7EAF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 11a5 5 0 00-7.54-3.54l-2.12 2.12a5 5 0 007.07 7.07l1.41-1.41" stroke="#D7EAF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
    );
};
    
export default Catalogo;