import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from '../images/hero-mype.png';
import imgFabric from '../images/Group-7.png';
import ondas from '../images/ondas.png';
import automocion from '../images/automocion.png';
import fotovoltaico from '../images/fotovoltaico.png';
import clinic from '../images/clinic.png';
import ferroviario from '../images/ferroviario.png';
import fabricacion from '../images/fabricacion.png';
import industria from '../images/industria.png';
import naval from '../images/naval.png';
import backgroundImg from '../images/fondo-servicios.png';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      };

return (
<div>
    <Header />
    <div style={backgroundStyle}>
        <div className="hero min-h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mr-80">
                    <h1 className="mb-5 text-5xl font-bold mr-6">Mype</h1>
                    <p className="mb-5 mr-8">Your technology partner</p>
                </div>
                <div className="max-w-md">
                    <p className="mb-5 ml-20">Mype es una compañia creada en 1987 con capital íntegramente español y con sede en Barcelona.  Desde sus inicios como ingeniería electrónica, MYPE ha recorrido un largo camino, siendo hoy una empresa especializada en el diseño, fabricación y homologación de módulos y equipos de gran complejidad técnica capaces de trabajar en los entornos más exigentes.  Nuestro objetivo principal es ser los socios tecnológicos de su empresa, contribuyendo al logro de sus objetivos de negocio mediante productos y soluciones en ingeniería altamente eficientes.</p>
                </div>
            </div>
        </div>

        {/*<div className="container mx-auto px-4">*/}
        {/* Sección sectores y áreas */}
        <section className="py-12 mx-auto px-8">
            <h2 className="text-7xl mb-8 text-color">Sectores y áreas</h2>
            <div className="grid grid-cols-3 gap-8">
                {/* Caja 1 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={fotovoltaico} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Sector Fotovoltaico</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>MYPE diseña y desarrolla la electrónica de control y potencia y el software necesario para la producción de sofisticados y eficientes equipos destinados a la adquisición, medición, gestión y diagnosis de instalaciones fotovoltaicas, así como la monitorización de datos, apoyados por módulos de control remoto o wireless.</p>
                    {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Caja 2 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={clinic} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Clinic Solar System TM</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>MYPE ha creado un sofisticado sistema, el CLINIC SOLAR SYSTEM TM, capaz de detectar cualquier problema en la instalación fotovoltaica, diagnosticarlo y hallar su ubicación exacta.</p>
                        {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Caja 3 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={ferroviario} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Sector Ferroviario</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>Desde sus inicios, hace más de 20 años, MYPE ha efectuado importantes proyectos de demodelación de unidades de tren, aportando su experiencia en el desarrollo y fabricación de los distintos equipos electrónicos y de comunicación y procesado de datos que se instalan en los trenes:</p>
                        <ul className='text-color contenedor-lista'>
                            <li>Interfaces</li>
                            <li>Programables</li>
                            <li>Sensores y transductores</li>
                            <li>Iluminación</li>
                        </ul>
                        {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Caja 4 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={automocion} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Sector Automoción</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>Consolas de control y autómatas CAN preparados para controlar los procesos de los equipos embarcados en camiones.  La adquisición y control a través de bus CAN o CANOPEN se complementa con entradas y salidas analógicas y digitales.  Capacidad de mando remoto a través de señales de RF.</p>
                        {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Caja 5 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={industria} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Indústria</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>Programación de Autómatas propios y de mercado para el control de máquinas herramientoas.  Realización de cuadros eléctricos de control a medida.  Integración de mecánica, electricidad y electrónica.  Productos complementarios, como pantallas, indicadores y sensores.</p>
                        {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Caja 6 */}
                <div className="card box-color shadow-xl h-[30rem] flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={naval} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Sector Naval</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>Cuadros generales para iluminación y megafonía.  Cargadores específicos para baterías de submarinos.</p>
                        {/*} <div className="card-actions justify-center mt-10">
                            <button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

        {/* Sección test y homologación */}
        <section className="py-12">
            <h2 className="text-7xl mb-4 text-color mx-auto px-8">Test y Homologación</h2>
            <div className='w-3/5'>
                <p className="mb-4 text-color mx-auto px-8">
                    MYPE dispone de instalaciones propias para realizar ensayos de Precertificación de Comptabilidad Electromagnética (EMC), seguridad eléctrica y Cámara anecoica TDK.  En su labratorio se prueban los diferentes prototipos y equipos para su posterior homologación y certificación.
                </p>
                <p className="mb-4 text-color mx-auto px-8">
                    La amplia experiencia de MYPE en la aplicación de las distintas normativas le ha permitido crear una consultoría con los siguientes servicios:
                </p>
            </div>

            <div className="relative">
            <img src={ondas} alt="Imagen" className="mb-8 w-3/4 bg-[#000d19]" />
            <div className="card w-60 absolute top-[-4.3rem] right-60 text-color">
                <div className="card-body">
                    <p>Asesoramiento sobre las normas de aplicación.</p>
                </div>
            </div>

            <div className="card w-60 absolute top-8 right-32 text-color">
                <div className="card-body">
                    <p>Especificaciones requeridas y medidas a realizar.</p>
                </div>
            </div>

            <div className="card w-60 absolute top-32 right-60 text-color">
                <div className="card-body">
                    <p>Auditoría y mantenimiento de instalaciones.</p>
                </div>
            </div>

            <div className="card w-80 absolute top-56 right-12 text-color">
                <div className="card-body">
                    <p>Reingeniería de los equipos para solucionar los incumplimientos que se presenten.</p>
                </div>
            </div>

            <div className="card w-80 absolute top-80 right-36 text-color">
                <div className="card-body">
                    <p>Garantía de calidad según los estándares internacionales ISO 9001.</p>
                </div>
            </div>           
            </div>
        </section>

        <section className="py-12 mx-auto pl-8 pb-72">
            <div className="grid grid-cols-2 gap-8"> 
                <div className="card box-color shadow-xl mr-2 h-full flex flex-col">
                    <div className="card-body text-color flex flex-row items-start"> 
                        <div className="mr-2">
                            <img src={fabricacion} alt="Imagen" className="w-10 h-10" />
                        </div>
                        <h2 className="card-title text-2xl">Fabricación</h2>
                    </div>
                    <div className="card-body text-color">
                        <p>MYPE destina más de 1.000 m2 para ubicar las diferentes líneas de fabricación atendiendo a la diversidad de sus productos, creando sus equipos, eléctricos y electrónicos, e instrumentos de test en función de las especificaciones del cliente, y asesorándole con las últimas tecnologías de fabricación:</p>
                        <ul className='contenedor-lista'>
                            <li>Línea de Montaje SMD</li>
                            <li>Soldadura por Ola y Refusión</li>
                            <li>Cabina de tropicalización</li>
                            <li>Taller electromecánico</li>
                            <li>Centro de Mecanizado</li>
                            <li>Líneas específicas de "test in"</li>
                            <li>Bancos Electrotécnicos y testing</li>
                            <li>Logística y adecuación ESD</li>
                        </ul>
                        <p></p>
                        <p>Mype realiza controles exhaustivos en todos sus procesos de fabricación persiguiendo la máxima excelencia en todos los niveles de calidad, eficiencia y rentabilidad.</p>
                    </div>
                </div>
                <div className="ml-2 sectionWithBackground"></div>
            </div>
        </section>
    </div>
    {/*</div>*/}
    <Footer />
</div>
  );
}

export default Home;
