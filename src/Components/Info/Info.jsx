import React, { useState, useEffect } from 'react';
import './Info.css';  // Asegúrate de tener el archivo CSS para los estilos
import imagenes from '../imagenes';
import Servicios from '../Servicios/Servicios';
export default function Info() {
    // Estado para mantener la imagen de fondo actual
    const [imagenIndex, setImagenIndex] = useState(0);

    // Efecto para cambiar la imagen cada 1 segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes?.length); // Cambia al siguiente índice
        }, 3000); // 1000 ms = 1 segundo

        return () => clearInterval(interval); // Limpieza cuando el componente se desmonta
    }, []);

    // Imagen actual
    const imagenAleatoria = imagenes[imagenIndex];
    return (
        <div className="info-container"
            style={{
                position: 'relative',
                width: '100%',
                backgroundImage: `url(${imagenAleatoria})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}>
            <section className="intro" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>RETIRO EN BUZIOS Espiritualidade!!!</h1>
                </div>

                <p className="highlight">All Inclusive PREMIUM</p>
                <p className="dates">8 días, 7 noches</p>
                <p className="highlight">Habitaciones de Lujo con Hidromasaje</p>
                <p className="gourmet">Pensión completa vegetariana Gourmet</p>
            </section>

            <Servicios />
            <section className="hotel-info" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>HOTEL INTERNACIONAL BUZIOS ESPIRITUALIDADE</h1>
                </div>
                <p><strong>La estadía incluye:</strong></p>
                <p>Habitaciones de lujo con hidromasaje para relajarte y disfrutar de la naturaleza.                </p>
                <p>Pensión completa vegetariana gourmet  EXQUISITOS Sabores...      con 7 Desayunos, 7 Cenas y 6 Almuerzos, incluyendo Entrada, Plato Principal, Postre, agua,  y limonada.
                </p>
                <p>Actividades Espirituales a la mañana y a la tarde,  y meditaciones en el oratorio.
                </p>
                <p>Acceso a instalaciones, como Piscina al aire libre, Sauna, Bañera de Hidromasaje</p>
                <p>Este Retiro es Ideal para Aquellos que Buscan una Estadía de Pleno Relax y Bienestar, Conectándose con la Naturaleza y su Esencia... También para Compartir en Tribu Ceremonias y Rituales para Empoderar y Anclar el Alma!!! ¡Será una Experiencia Transformadora Enriquecedora de HabitarNOS EN GRUPO de CompartirNos de Anclar LA ALEGRIA EL DISFRUTE y LA GRATITUD POR LA VIDA!!! AHO!!!</p>
            </section>

            <section className="details" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Detalles del Retiro</h1>
                </div>
                <p><strong>Fecha:</strong> 10 al 17 de junio</p>
                <p><strong>Lugar:</strong> Búzios, Río de Janeiro, Brasil</p>
                <p><strong>Duración:</strong> 8 días, 7 noches</p>
                <p><strong>Incluye:</strong></p>
                <p>Alojamiento en un Lugar Sagrado y Natural                </p>
                <p> Comidas Vegetarianas Gourmet
                </p>
                <p> Actividades Espirituales y de Crecimiento Personal
                </p>
                <p><strong>No Incluye:</strong></p>
                <p>Vuelos internacionales</p>
                <p>Seguros y asistencia al viajero (opcional)</p>
                <p>Traslados desde aeropuerto hasta el Hotel (coordinación con transporte privado de confianza)... Excursiones en Barco ...  Gastos extras personales

                </p>
            </section>

            <section className="cancellation" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Política de Cancelación</h1>
                </div>

                <p>La Reserva del cupo y transferencias posteriores no son reembolsables en caso de no asistir.
                </p>
            </section>

            <section className="additional-info" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Información Adicional</h1>
                </div>
                <p>Es importante leer y aceptar los términos y condiciones antes de realizar la Reserva.
                </p>
                <p>Se Recomienda contratar Seguros de Viaje y Asistencia al viajero para cubrir cualquier Imprevisto...</p>
            </section>

            <section className="value" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>VALOR del INTERCAMBIO</h1>
                </div>
                <p><strong>1400 USD<br /></strong>
                    TODO INCLUIDO dentro del Retiro
                    Instalaciones Premium con PLAYA PRIVADA... <br /> Alojamiento de Luxe ... <br />Pensión Completa Gourmet con Bebida(agua y limonada) ... <br />Todas las Actividades Guía y Acompañamiento durante Todo El Retiro...<br />

                    SEÑA de 600 USD hasta el 10 de Abril... <br />Señando hasta esa fecha la inversión será de 1200USD pasada la fecha el Importe   será de 1400USD
                </p>
            </section>

            <section className="payment" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Opciones para la Reserva</h1>
                </div>

                <p>DOLAR BILLETE
                </p>
                <p>Transferencia en Pesos Argentinos cotización del momento de Transferencia DOLAR BLUE Venta...</p>
                <p>EL SALDO SE ENTREGA EN DOLAR BILLETE AZUL AL MOMENTO DEL CHEK IN...
                </p>
                <p> <strong>IMPORTANTE</strong> tener en cuenta que los Cupos son limitados con fecha anticipada de Reserva...
                </p>
            </section>

            <section className="consultation" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>CONSULTA E INSCRIPCIÓN</h1>
                </div>

                <p>Contacta al +5493814668640 SANDRA</p>
            </section>

            <section className="excursion" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>--- ARRAIAL DO CABO ---</h1>
                </div>
                <p><strong>Paseo en barco en Arraial:</strong> Está entre los 12 mejores viajes del mundo según National Geographic.</p>
                <p>Recorrido incluye la Isla de Faro, Playa de Forno, Playa de Pontal do Atalaia, la gruta azul y mucho más.</p>
                <p><strong>Duración:</strong> 4 horas</p>
                <p><strong>Precio:</strong> R$ 250 reales por persona</p>
                <p>Incluye traslado ida y vuelta, guía exclusivo y almuerzo (excepto bebida).</p>
                <p>Niños de 0 a 4 años entran gratis, de 5 a 10 años pagan la mitad. A partir de los 11 años se paga completo.</p>
            </section>
        </div>
    );
}
