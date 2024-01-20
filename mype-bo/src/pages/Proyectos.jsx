import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Proyectos = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://www.mype.com/wp-content/uploads/2024/01/fondo-servicios.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
    };

  return (
    <div>
        <Header />
        <div className="py-12 mx-auto px-4 sm:px-8" style={backgroundStyle}>
            <section className='mb-20'>
                <h2 className="text-7xl mb-8 text-color">Proyectos</h2>

                {/* Parte para DESKTOP */}
                <div className='sm:hidden lg:block'>
                    <div className="proyectos">
                        <div className="box-color rounded-lg shadow overflow-hidden proyecto1">
                            <div className="p-4">
                                <h3 className="font-bold text-3xl mb-2 text-color">Industriales</h3>
                                <ul className='contenedor-lista text-color text-xl'>
                                    <li>Controles y sistemas de acceso y pago. Hardware, firmware y software de control.  Inputs, outputs, indicadores luminosos. Ensamblaje e integración.</li>
                                    <li>Automatismos y sistemas para maquinaria industrial. Interfaces táctiles. Software y firmware. Proyectos a medida.</li>
                                    <li>Autómatas y cuadros de control para plataformas hidráulicas de contenedores soterrados.</li>
                                    <li>Botoneras para control local y remoto "wireless". Consola de mando por RF para control y movimiento de descarga de contenedores.</li>
                                    <li>Antenas activas, diseño, desarrollo, fabricación.Telecomunicaciones y energia radiante.</li>
                                    <li>Diseño, desarrollo y fabricación en serie de botoneras para integración en vehiculos; control de automatismos, monitorización...</li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-color rounded-lg shadow overflow-hidden proyecto2">
                            <div className="p-4">
                                <h3 className="font-bold text-3xl mb-2 text-color">Solares</h3>
                                <ul className='contenedor-lista text-color text-xl'>
                                    <li>Equipos de diagnóstico de precisión para paneles fotovoltaicos, medidores de tensión y de corriente, y diagnóstico de las acciones óptimas para máximizar el rendimiento. TRANSCLINIC TM.</li>
                                    <li>Gama de Medidores de Corriente nxi, para la medición y monitoreo de strings fotovoltaicas hasta 30 A por string. TRANSCLINIC TM. 20.000 uds.</li>
                                    <li>Sensores solares, equipos de control para torres de seguimineto solar, equipos y sistemas de comunicaciones. Software y equipos de telecontrol y monitorización remota.</li>
                                    <li>Desarrollo y fabricación de módulos demostrativos de seguimiento solar para universidades y centros de investigación.</li>
                                    <li>Inversor trifasico 10 kW. Diseño, desarrollo, prototipos y fabricación.</li>
                                    <li>Instalaciones sobre cubierta, aislada o a red. Riego Solar. Dispositivos electrotécnicos para farolas solares.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-color rounded-lg shadow overflow-hidden proyecto3">
                            <div className="p-4">
                                <h3 className="font-bold text-3xl mb-2 text-color">Ferroviarios</h3>
                                <ul className='contenedor-lista text-color text-xl'>
                                    <li>Control electrónico para WC de vacío. Sondas, sensores y actuadores.</li>
                                    <li>Controles y sistemas electrónicos para Aire Acondicionado.</li>
                                    <li>Sistema de comunicaciones (Tren – Central), para telecontrol y monitorización de datos. Sistema de telecomunicaciones por IR.</li>
                                    <li>Sistemas embarcados de megafonía, parada de emergencia, pulsadores de azafata, interfonía y telefonía completa de servicio y pasajeros; teleindicadores.</li>
                                    <li>Composiciones enteras de iluminación electrónica para tubos fluorescentes, convertidores y luces regulables para habitáculos y cabina.</li>
                                    <li>Control digital de cabina para locomotoras diesel, sistemas automáticos de control para motores, embragues y cambios.</li>
                                    <li>Diseño, desarrollo y fabricación de sensores para medidas de vibraciones de rodaduras (bogies) mediante acelerómetros y procesado de señal digital.</li>
                                    <li>Diseño y fabricación de producto en serie, balastos electrónicos y convertidores para fluorescencia, halógenas, leds... Regulación de iluminación DIMMER. Coches de pasajeros, coche restaurante, cabina, porta-equipajes... 50.000 uds.</li>
                                    <li>Balizas comunicación en vía y embarcada.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parte para móvil */}
                <div className="sm:block lg:hidden text-color p-4">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="card text-color box-color">
                            <div className="card-body">
                                <h3 className="font-bold text-3xl mb-2 text-color">Industriales</h3>
                                <ul className='contenedor-lista text-color text-2xl'>
                                    <li>Controles y sistemas de acceso y pago. Hardware, firmware y software de control.  Inputs, outputs, indicadores luminosos. Ensamblaje e integración.</li>
                                    <li>Automatismos y sistemas para maquinaria industrial. Interfaces táctiles. Software y firmware. Proyectos a medida.</li>
                                    <li>Autómatas y cuadros de control para plataformas hidráulicas de contenedores soterrados.</li>
                                    <li>Botoneras para control local y remoto "wireless". Consola de mando por RF para control y movimiento de descarga de contenedores.</li>
                                    <li>Antenas activas, diseño, desarrollo, fabricación.Telecomunicaciones y energia radiante.</li>
                                    <li>Diseño, desarrollo y fabricación en serie de botoneras para integración en vehiculos; control de automatismos, monitorización...</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card text-color box-color">
                            <div className="card-body">
                                <h3 className="font-bold text-3xl mb-2 text-color">Solares</h3>
                                <ul className='contenedor-lista text-color text-2xl'>
                                    <li>Equipos de diagnóstico de precisión para paneles fotovoltaicos, medidores de tensión y de corriente, y diagnóstico de las acciones óptimas para máximizar el rendimiento. TRANSCLINIC TM.</li>
                                    <li>Gama de Medidores de Corriente nxi, para la medición y monitoreo de strings fotovoltaicas hasta 30 A por string. TRANSCLINIC TM. 20.000 uds.</li>
                                    <li>Sensores solares, equipos de control para torres de seguimineto solar, equipos y sistemas de comunicaciones. Software y equipos de telecontrol y monitorización remota.</li>
                                    <li>Desarrollo y fabricación de módulos demostrativos de seguimiento solar para universidades y centros de investigación.</li>
                                    <li>Inversor trifasico 10 kW. Diseño, desarrollo, prototipos y fabricación.</li>
                                    <li>Instalaciones sobre cubierta, aislada o a red. Riego Solar. Dispositivos electrotécnicos para farolas solares.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card text-color box-color">
                            <div className="card-body">
                                <h3 className="font-bold text-3xl mb-2 text-color">Ferroviarios</h3>
                                <ul className='contenedor-lista text-color text-2xl'>
                                    <li>Control electrónico para WC de vacío. Sondas, sensores y actuadores.</li>
                                    <li>Controles y sistemas electrónicos para Aire Acondicionado.</li>
                                    <li>Sistema de comunicaciones (Tren – Central), para telecontrol y monitorización de datos. Sistema de telecomunicaciones por IR.</li>
                                    <li>Sistemas embarcados de megafonía, parada de emergencia, pulsadores de azafata, interfonía y telefonía completa de servicio y pasajeros; teleindicadores.</li>
                                    <li>Composiciones enteras de iluminación electrónica para tubos fluorescentes, convertidores y luces regulables para habitáculos y cabina.</li>
                                    <li>Control digital de cabina para locomotoras diesel, sistemas automáticos de control para motores, embragues y cambios.</li>
                                    <li>Diseño, desarrollo y fabricación de sensores para medidas de vibraciones de rodaduras (bogies) mediante acelerómetros y procesado de señal digital.</li>
                                    <li>Diseño y fabricación de producto en serie, balastos electrónicos y convertidores para fluorescencia, halógenas, leds... Regulación de iluminación DIMMER. Coches de pasajeros, coche restaurante, cabina, porta-equipajes... 50.000 uds.</li>
                                    <li>Balizas comunicación en vía y embarcada.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/1.-Sistemas-de-Megafonia-e-Interfonia-para-ferroviario-embarcado-scaled.jpg" className="rounded-box h-80" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/1.-PAS1.png" className="rounded-box h-80" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/2.-Automata-de-control-HVAC.-TCA3_1.png" className="rounded-box h-80 bg-white" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/1.-Sistemas-de-Megafonia-e-Interfonia-para-ferroviario-embarcado-scaled.jpg" className="rounded-box h-80" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/1.-PAS1.png" className="rounded-box h-80" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://www.mype.com/wp-content/uploads/2024/01/2.-Automata-de-control-HVAC.-TCA3_1.png" className="rounded-box h-80 bg-white" />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
    );
};
    
export default Proyectos;