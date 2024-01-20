import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contacto = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://www.mype.com/wp-content/uploads/2024/01/fondo-servicios.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
    };

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        tipoContacto: 'consulta',
        comentarios: '',
        politicaPrivacidad: false,
    });

    const handleMapClick = () => {
        // URL con las coordenadas del lugar en Google Maps
        const googleMapsUrl = 'https://www.google.com/maps/dir//Ctra.+Terrassa,+67,+08191+Rub%C3%AD,+Barcelona/@41.5012857,2.031556,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4917dcfb3ba3f:0x500e248b28a0b8e5!2m2!1d2.0328461!2d41.5013187?entry=ttu';

        // Abrir la ubicación en Google Maps en una nueva ventana
        window.open(googleMapsUrl, '_blank');
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar datos al backend de WordPress
            const response = await fetch('http://mype.com/wp-json/mype/v1/formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Éxito: muestra un mensaje o realiza acciones adicionales si es necesario
                console.log('Formulario enviado con éxito');
            } else {
                // Error en la solicitud al backend
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            // Manejo de errores de la solicitud
            console.error('Error de red al enviar el formulario', error);
        }
    };

  return (
    <div>
        <Header />
        <div className="py-28 mx-auto sm:px-4 md::px-8" style={backgroundStyle}>
            {/* Columna 1 - Información de contacto y redes sociales */}
            <div className="sm:grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="mb-10">
                    {/* Sección 1 - Información de contacto */}
                    <div className="mb-10">
                        {/* Caja 1 - Ubicación */}
                        <div className="card box-color shadow-xl mb-6">
                            <div className="card-body text-color flex flex-row"> 
                                <div className="mr-2">
                                    <FiMapPin className="text-3xl mr-8" />
                                </div>
                                <h2 className="card-title sm:text-4xl lg:text-3xl text-color">Ubicación</h2>
                            </div>
                            <div className="card-body text-color sm:text-2xl lg:text-xl">
                                <p>Ctra. Terrassa 67 08191 Rubí (Barcelona)</p>
                            </div>
                        </div>

                        {/* Caja 2 - Teléfono */}
                        <div className="card box-color shadow-xl mb-6">
                            <div className="card-body text-color flex flex-row"> 
                                <div className="mr-2">
                                    <FiPhone className="text-3xl mr-8" />
                                </div>
                                <h2 className="card-title sm:text-4xl lg:text-3xl text-color">Teléfono</h2>
                            </div>
                            <div className="card-body text-color sm:text-2xl lg:text-xl">
                                <p>Tel. 93.588.51.59</p>
                                <p>Fax. 93.588.51.42</p>
                            </div>
                        </div>

                        {/* Caja 3 - Correo */}
                        <div className="card box-color shadow-xl mb-6">
                            <div className="card-body text-color flex flex-row"> 
                                <div className="mr-2">
                                    <FiMail className="text-3xl mr-8" />
                                </div>
                                <h2 className="card-title sm:text-4xl lg:text-3xl text-color">Correo electrónico</h2>
                            </div>
                            <div className="card-body text-color sm:text-2xl lg:text-xl">
                                <p>mype@mype.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 2 - Formulario */}
                <div>
                    <h2 className="sm:text-4xl md:text-5xl lg:text-4xl mb-8 text-color">Contacta con nosotros</h2>
                    <p className="mb-8 text-color sm:text-2xl lg:text-xl">Envíenos sus dudas, consultas o comentarios.</p>

                    {/* Formulario */}
                    <form>
                        <div className="sm:grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="nombre" className='text-color sm:text-2xl lg:text-xl'>Nombre</label>
                                <input type="text" id="nombre" name="nombre" className="w-full p-2 input input-bordered" required/>
                            </div>
                            <div>
                                <label htmlFor="apellidos" className='text-color sm:text-2xl lg:text-xl'>Apellidos</label>
                                <input type="text" id="apellidos" name="apellidos" className="w-full p-2 input input-bordered" />
                            </div>
                            <div>
                                <label htmlFor="correo" className='text-color sm:text-2xl lg:text-xl'>Correo Electrónico</label>
                                <input type="email" id="correo" name="correo" className="w-full p-2 input input-bordered" required/>
                            </div>

                            <div>
                                <label htmlFor="tipoContacto" className='text-color sm:text-2xl lg:text-xl'>Tipo de Contacto</label>
                                <select id="tipoContacto" name="tipoContacto" className="w-full p-2 select select-bordered sm:text-2xl lg:text-xl" required>
                                    <option value="consulta">Consulta técnica</option>
                                    <option value="contacto">Toma de contacto</option>
                                    <option value="proyectos">Nuevo proyecto</option>
                                    <option value="otra">Otros...</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="comentarios" className='text-color sm:text-2xl lg:text-xl'>Comentarios</label>
                            <textarea id="comentarios" name="comentarios" rows="4" className="w-full p-2 textarea textarea-bordered"></textarea>
                        </div>

                        <div className="mb-4">
                            <input type="checkbox" id="politicaPrivacidad" name="politicaPrivacidad" className='checkbox' required/>
                            <label htmlFor="politicaPrivacidad" className="ml-2 text-color sm:text-2xl lg:text-xl">Acepto la política de privacidad</label>
                        </div>

                        <button type="submit" className="boton sm:btn-sm md:btn-md lg:btn-lg mb-8 sm:text-2xl lg:text-xl">Enviar</button>
                    </form> 
                </div>
            </div>

            {/* Columna 3 - Mapa de Google */}
            <div style={{ width: '100%', height: '500px', cursor: 'pointer' }}>
                <iframe
                title="Google Map"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1494.0689654313924!2d2.031555992432313!3d41.501285694157055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x12a4917dcfb3ba3f%3A0x500e248b28a0b8e5!2sCtra.%20Terrassa%2C%2067%2C%2008191%20Rub%C3%AD%2C%20Barcelona!3m2!1d41.5013187!2d2.0328461!5e0!3m2!1ses!2ses!4v1703843704678!5m2!1ses!2ses"
                ></iframe>
                <div className="text-center mt-4">
                    <button
                    onClick={handleMapClick}
                    className="boton sm:text-2xl lg:text-xl"
                    >
                    Abrir en Google Maps
                    </button>
                </div>       
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contacto;