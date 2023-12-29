import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImg from '../images/fondo-servicios.png';
import about from '../images/imagen-mype.png';

const About = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      };

  return (
    <div>
        <Header />
        <div className="py-12 mx-auto pb-72 px-8" style={backgroundStyle}>
            {/* Sección 1 */}
            <section className="py-12 mx-auto mb-4 flex">
                {/* Columna 1 - Imagen */}
                <div className="w-1/2 pr-8">
                    <img src={about} alt="Imagen" className="bg-[#000d19]" />
                </div>

                {/* Columna 2 - Texto */}
                <div className="w-1/2 flex items-center">
                    <div className="text-lg">
                        <h2 className="text-4xl font-bold">Bienvenido a MYPE</h2>
                        <p>MYPE es una compañía creada en 1987 con capital íntegramente español y con sede en Barcelona.</p>
                        <p>Desde sus inicios como ingeniería electrónica, MYPE ha recorrido un largo camino, siendo hoy una empresa especializada en el diseño, fabricación y homologación de módulos y equipos de gran complejidad técnica capaces de trabajar en los entornos más exigentes.</p>
                    <p>La estrategia empresarial de MYPE se sustenta sobre dos grandes pilares:</p>
                    </div>
                </div>
            </section>

            {/* Sección 2 */}
            <section className="py-12 mx-auto pb-8 flex">
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl mb-6 titulo'>Nosotros</h2>
                    <div className='grid grid-cols-2 gap-8'>
                        {/* Caja 1 */}
                        <div className="card box-color shadow-xl h-auto flex flex-col">
                            <div className="card-body text-color flex flex-row items-start"> 
                                <div className="mr-2">
                                   <p>1</p>
                                </div>
                                <h2 className="card-title text-2xl">El equipo humano</h2>
                            </div>
                            <div className="card-body text-color">
                                <p>Multidisciplinario con gran vocación de servicio y capacitado para afrontar grandes retos.</p>
                            </div>
                        </div>

                        {/* Caja 2 */}
                        <div className="card box-color shadow-xl h-auto flex flex-col">
                            <div className="card-body text-color flex flex-row items-start"> 
                                <div className="mr-2">
                                   <p>2</p>
                                </div>
                                <h2 className="card-title text-2xl">Nuestros valores</h2>
                            </div>
                            <div className="card-body text-color">
                                <p>Basados en la excelencia, integridad, compromiso y responsabilidad social.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Sección 3 */}
            <section className="py-12 mx-auto pb-8">
                <div className="flex flex-col items-center mb-6">
                    <h2 className='text-4xl mb-6 titulo'>Nuestro negocio</h2>
                    <div className="grid grid-cols-2 gap-8">
                    {/* Caja 1 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color">(I+D+i) Desarrollo de Ingeniería/Producto con soluciones innovadoras y específicas para los sectores fotovoltaico, ferroviario y la industria en general.</p>
                        </div>
                    </div>

                    {/* Caja 2 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color">Laboratorio de pruebas y homologaciones.</p>
                        </div>
                    </div>

                    {/* Caja 3 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color">Fabricación y comercialización de productos estándares.</p>
                        </div>
                    </div>

                    {/* Caja 4 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color">Colaboración con nuestros clientes para el desarrollo de sus proyectos.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <p>Nuestro objetivo principal es ser los socios tecnológicos de su empresa, contribuyendo al logro de sus objetivos de negocio mediante productos y soluciones en ingeniería altamente eficientes.</p>
            </section>

        </div>
        <Footer />
    </div>
  );
};

export default About;