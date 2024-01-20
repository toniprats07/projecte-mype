import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Nosotros = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://www.mype.com/wp-content/uploads/2024/01/fondo-servicios.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
    };
    const about = 'https://www.mype.com/wp-content/uploads/2024/01/imagen-mype.png';

  return (
    <div>
        <Header />
        <div className="py-8 mx-auto px-4 sm:px-8" style={backgroundStyle}>
            {/* Sección 1 */}
            <section className="py-8 mx-auto mb-4 flex sm:flex-col lg:flex-row">
                {/* Columna 1 - Imagen */}
                <div className="sm:w-full lg:w-1/2 sm:pr-0 lg:pr-8 sm:mb-4 lg:mb-0">
                    <img src={about} alt="Imagen" className="w-full bg-[#000d19]" />
                </div>

                {/* Columna 2 - Texto */}
                <div className="sm:w-full lg:w-1/2 flex items-center">
                    <div className="text-lg text-center lg:text-left">
                        <h2 className="sm:text-2xl lg:text-xl font-bold mb-4 text-color">Bienvenido a MYPE</h2>
                        <p className='text-color sm:text-2xl lg:text-xl'>MYPE es una compañía creada en 1987 con capital íntegramente español y con sede en Barcelona.</p>
                        <p className='text-color sm:text-2xl lg:text-xl'>Desde sus inicios como ingeniería electrónica, MYPE ha recorrido un largo camino, siendo hoy una empresa especializada en el diseño, fabricación y homologación de módulos y equipos de gran complejidad técnica capaces de trabajar en los entornos más exigentes.</p>
                        <p className='text-color sm:text-2xl lg:text-xl'>La estrategia empresarial de MYPE se sustenta sobre dos grandes pilares:</p>
                    </div>
                </div>
            </section>

            {/* Sección 2 */}
            <section className="py-12 mx-auto px-4 sm:px-8">
                <div> 
                    <div className="divider divider-warning text-2xl lg:text-4xl text-color mb-12">Nosotros</div>
                    
                    <div className='sm:grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {/* Caja 1 */}
                        <div className="card box-color shadow-xl h-auto flex flex-col">
                            <div className="card-body text-color flex flex-row items-start"> 
                                <div className="mr-2">
                                   <p>1</p>
                                </div>
                                <h2 className="card-title sm:text-4xl lg:text-3xl text-color">El equipo humano</h2>
                            </div>
                            <div className="card-body text-color sm:text-2xl lg:text-xl">
                                <p>Multidisciplinario con gran vocación de servicio y capacitado para afrontar grandes retos.</p>
                            </div>
                        </div>

                        {/* Caja 2 */}
                        <div className="card box-color shadow-xl h-auto flex flex-col">
                            <div className="card-body text-color flex flex-row items-start"> 
                                <div className="mr-2">
                                   <p>2</p>
                                </div>
                                <h2 className="card-title sm:text-4xl lg:text-3xl text-color">Nuestros valores</h2>
                            </div>
                            <div className="card-body text-color sm:text-2xl lg:text-xl">
                                <p>Basados en la excelencia, integridad, compromiso y responsabilidad social.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Sección 3 */}
            <section className="py-12 mx-auto px-4 lg:px-8">
                <div>             
                    <div className="divider divider-warning text-2xl lg:text-4xl text-color mb-12">Nuestro negocio</div>

                    <div className="sm:grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Caja 1 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color sm:text-2xl lg:text-xl">(I+D+i) Desarrollo de Ingeniería/Producto con soluciones innovadoras y específicas para los sectores fotovoltaico, ferroviario y la industria en general.</p>
                        </div>
                    </div>

                    {/* Caja 2 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color sm:text-2xl lg:text-xl">Laboratorio de pruebas y homologaciones.</p>
                        </div>
                    </div>

                    {/* Caja 3 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color sm:text-2xl lg:text-xl">Fabricación y comercialización de productos estándares.</p>
                        </div>
                    </div>

                    {/* Caja 4 */}
                    <div className="card box-color shadow-xl h-auto flex flex-col">
                        <div className="card-body text-color flex flex-row items-start">
                        <p className="text-color sm:text-2xl lg:text-xl">Colaboración con nuestros clientes para el desarrollo de sus proyectos.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <p className='text-color sm:text-2xl lg:text-xl mt-8'>Nuestro objetivo principal es ser los socios tecnológicos de su empresa, contribuyendo al logro de sus objetivos de negocio mediante productos y soluciones en ingeniería altamente eficientes.</p>
            </section>

        </div>
        <Footer />
    </div>
  );
};

export default Nosotros;