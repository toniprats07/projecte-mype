import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Servicios = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://www.mype.com/wp-content/uploads/2024/01/fondo-servicios.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
    };

  return (
    <div>
        <Header />
        <div className="py-12 mx-auto px-4 lg:px-8" style={backgroundStyle}>
            {/* SERVICIOS */}
            <div>
                <h2 className="text-7xl mt-10 text-color">Servicios</h2>
            </div>

            <div className="sm:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Fila 1 */}
                <div className="col-span-1 text-center mb-4">
                    <h4 className="text-lg font-bold mb-2"></h4>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color items-start sm:text-2xl lg:text-xl">
                        <p>Ingeniería, proyectos en mano.</p>
                        <p>Mercado CE.</p>
                        <p>Asesoramiento y pre certificación en nuestras instalaciones.</p>
                        <p>Certificación en organismos notificados.</p>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Ingeniería</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-16 sm:text-2xl lg:text-xl">
                            <p>Realización de proyectos a medida.  Investigación, desarrollo y aplicación a partir de los requerimientos del cliente de productos eléctricos y electrónicos.  Integración de los mismos en los sistemas del cliente.  Proyectos interdisciplinares incluyendo mecánica, control de elementos eléctricos, hidráulicos y neumáticos; comunicación digital con sistemas remotos mediante cable, red o wireless; programación de microprocesadores y autómatas PLC.</p>
                        </div>
                    </div>
                </div>

                {/* Fila 2 */}
                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Electricidad</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-80 sm:text-2xl lg:text-xl">
                            <p>Realización de proyectos a medida.  Investigación, desarrollo y aplicación a partir de los requerimientos del cliente de productos eléctricos y electrónicos.  Integración de los mismos en los sistemas del cliente.  Proyectos interdisciplinares incluyendo mecánica, control de elementos eléctricos, hidráulicos y neumáticos; comunicación digital con sistemas remotos mediante cable, red o wireless; programación de microprocesadores y autómatas PLC.</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Electrónica</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-12 sm:text-2xl lg:text-xl">
                            <p>Diseño de sistemas, módulos y tarjetas electrónicos, tanto analógicos como digitales. Nuestras capacidades incluyen el diseño de placas de circuito impreso y de la mecánica correspondiente. Experiencia en:</p>
                            <ul className='contenedor-lista'>
                                <li>Diseño de controladores mediante microprocesadores 8/16/23 bits, tarjetas I/O (optoacopladas, relés y estado sólido), AD y DA, buses de comunicación RS232, RS485, RS422, CAN, CANOPEN, USB, Ethernet.</li>
                                <li>Convertidores DC/DC y AC/DC hasta 200W. Convertidores y balastos.</li>
                                <li>Megafonía, telefonía e interfonía. Amplificadores línea 100V.</li>
                                <li>Pantallas de aviso (LCD y leds), botoneras de control y generadores de sonido.</li>
                                <li>Telegestión sin hilos desde aplicaciones de baja velocidad (FSK 868) hasta GPRS/UTMS.</li>
                                <li>Transductores y procesado de señal. Temperatura, presión, aceleración...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Laboratorio</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-72 sm:text-2xl lg:text-xl">
                            <p>Disponemos de instalaciones propias para realizar ensayos de precertificación de Compatibilidad electromagnética (EMC) y seguridad eléctrica. Asimismo disponemos de una amplia experiencia en las normas aplicables, sobre las medidas a realizar y sobre las soluciones a aplicar en caso de problemas. Ofrecemos los siguientes servicios: Asesoramiento sobre las normas que aplican a cada caso, los límites a cumplir y las medidas a realizar. Medida guiada de los aparatos del cliente contra las normas y especificaciones requeridas. Reingeniería de los equipos para solucionar los no cumplimientos que se presenten.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCTOS */}
            <div>
                <h2 className="text-7xl mt-32 text-color">Productos</h2>
            </div>


            <div className="sm:grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Fila 1 */}
                <div className="col-span-1 text-center mb-4">
                    <h4 className="text-lg font-bold mb-2"></h4>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl lg:mb-8">Autómatas programables</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color sm:text-2xl lg:text-xl">
                            <p>Entradas y salidas tanto digitales y analógicas, preparados para controlas sistemas en entornos exigentes, alto rango de temeratura, vibraciones y aislamiento. sistema modular que permite adaptarse al cliente con bajo coste. Buses de control RS232, RS485, RS422, CAN, CANOPEN. Marca CE, EN-50155, 50121-3-2. Utilizados en control de tracción de locomotras diesel, aires acondicionados y calefacciones en trenes, control de WC de vacío, control de puertas y acesps, control de generadores e energía solar en aplicaciones profesionales, seguimiento solar, control de contenedores soterrados, sistemas de pago en entreriores, interfaces de adaptación eletrónica inteligentes...</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Alimentadores para iluminación profesional</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-20 sm:text-2xl lg:text-xl">
                            <p>A partir de tensión DC (110, 7, 36 y 24V) para amplicaciones ferroviarias, automoción, alimentación solar o de emergencia. Normas UNE-EN-50311, EN-50155.</p>
                            <ul className='contenedor-lista'>
                                <li>Balastos electrónico para tubos fluorescentes tipo T5 y T8.</li>
                                <li>Convertidores electrónicos para lámparas halógenas.</li>
                                <li>Convertidores electrónicos para lámparas leds.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Fila 2 */}
                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Pantallas de anuncions y teleindicación mediante LCD o leds</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-60 sm:text-2xl lg:text-xl">
                            <p>De alto contraste y retroiluminación tanto a visión nocturna y diurna incluso en exteriores con luz solar.</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Megafonía</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-36 sm:text-2xl lg:text-xl">
                            <p>Sistemas de magafonía y teleindicación para la sonorización de coches ferroviarios. Sistemas de generación de avisos y múscia basados en MP3. Intrfonos de seguridad entre cabinas y entre pasajeros y cabina.</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Sensores y transductores</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-48 sm:text-2xl lg:text-xl">
                            <p>incluyendo procesado digital y/o analógico. Por ejemplo de temperatura, humos, aceleración, presencia...</p>
                        </div>
                    </div>
                </div>

                {/* Fila 3 */}
                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Sistemas de telegestión y/o telecontrol wireless</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-60 sm:text-2xl lg:text-xl">
                            <p>Sistemas de mantenimiento remoto.</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Cuadros eléctricos de control predefinidos para aplicación rápida</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-52 sm:text-2xl lg:text-xl">
                            <p>Varias alicaciones, p.e. control de máquinas herramienta o calefactores mediante resistencias.</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Sistema de adquisición de datos</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-44 sm:text-2xl lg:text-xl">
                            <p>Módulos de adquisición de datos para sensores. MAS-01, MAS-02.</p>
                        </div>
                    </div>
                </div>

                {/* Fila 4 */}
                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Sistema de control de acceso</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color lg:mb-80 sm:text-2xl lg:text-xl">
                            <p>Tarjetas de control para control de flujo, procesado y telegestión. Máquinas de peaje...</p>
                        </div>
                    </div>
                </div>

                <div className="card box-color shadow-xl flex flex-col h-full min-h-[30rem]">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <h2 className="card-title sm:text-4xl lg:text-3xl">Clinic Solar System</h2>
                    </div>
                    <div className="flex-grow">
                        <div className="card-body text-color sm:text-2xl lg:text-xl">
                            <p>MYPE presenta el “Clinic Solar System”. Producto patentado P2009 00449. Un sistema que mide y diagnostica con facilidad cualquier instalación realizada con paneles fotovoltaicos.  Es escalable desde una solución básica hasta un sistema de adquisición de datos complejo.</p>
                            <p>Su instalación se realiza con facilidad y seguridad, sin precisar personal especializado.</p>
                            <p>Los datos aportados por el “Clinic Solar System” permiten entender los problemas que puedan existir y actuar rápidamente para solucionarlos. De esta forma los rendimientos se optimizan. El mantenimiento se facilita, se dispone de datos contrastables que determinan el comportamiento de cada panel instalado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Footer />
    </div>
  );
};

export default Servicios;
