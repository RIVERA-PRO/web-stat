import React from 'react';
import './Info.css';  // Asegúrate de tener el archivo CSS para los estilos

export default function Info() {
    return (
        <div className="info-container">
            <section className="intro">
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

            <section className="hotel-info">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>HOTEL INTERNACIONAL BUZIOS ESPIRITUALIDADE</h1>
                </div>
                <p><strong>La estadía incluye:</strong></p>
                <p>Habitaciones de lujo con hidromasaje</p>
                <p>Pensión completa vegetariana gourmet</p>
                <p>Actividades espirituales: yoga, caminatas, meditaciones</p>
                <p>Acceso a instalaciones: piscina, sauna, bañera de hidromasaje, bar en la playa</p>
                <p>Este retiro es ideal para quienes buscan relajarse, conectarse con la naturaleza y experimentar una transformación personal.</p>
            </section>

            <section className="details">
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
                <p>Alojamiento en un lugar sagrado y natural</p>
                <p>Comidas vegetarianas gourmet</p>
                <p>Actividades espirituales y de crecimiento personal</p>
                <p>Traslados desde y hasta el lugar del encuentro</p>
                <p><strong>No Incluye:</strong></p>
                <p>Vuelos internacionales</p>
                <p>Seguros y asistencia al viajero (opcional)</p>
                <p>Gastos extras personales</p>
            </section>

            <section className="cancellation">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Política de Cancelación</h1>
                </div>

                <p>La reserva del cupo y transferencias posteriores no son reembolsables en caso de no asistir.</p>
            </section>

            <section className="additional-info">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Información Adicional</h1>
                </div>
                <p>Es importante leer y aceptar los términos y condiciones antes de realizar la reserva.</p>
                <p>Se recomienda contratar seguros de viaje y asistencia al viajero para cubrir cualquier imprevisto.</p>
            </section>

            <section className="value">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>VALOR del INTERCAMBIO</h1>
                </div>
                <p><strong>1400 USD</strong> TODO INCLUIDO dentro del Retiro</p>
                <p>Instalaciones Premium con Playa Privada, Alojamiento de Luxe, Pensión Completa Gourmet con Bebidas, Actividades Guiadas y Acompañamiento durante Todo El Retiro.</p>
                <p><strong>SEÑA de 600 USD</strong></p>
            </section>

            <section className="payment">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>Opciones para la Reserva</h1>
                </div>

                <p>Dólar Billete</p>
                <p>Transferencia en Pesos Argentinos (cotización del momento de Transferencia DÓLAR BLUE)</p>
                <p>El saldo se entrega en DÓLAR BILLETE AZUL al momento del CHECK IN.</p>
                <p><strong>IMPORTANTE:</strong> Los cupos son limitados, con fecha anticipada de Reserva.</p>
            </section>

            <section className="consultation">
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>CONSULTA E INSCRIPCIÓN</h1>
                </div>

                <p>Contacta al +5493814668640 SAN</p>
            </section>

            <section className="excursion">
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
