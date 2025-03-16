import React, { useState, useEffect } from 'react';
import './Info.css';  // Asegúrate de tener el archivo CSS para los estilos
import imagenes from '../imagenes';
import Servicios from '../Servicios/Servicios';
import Itinerario from '../Itinerario/Itinerario';

export default function Info() {
    // Estado para mantener la imagen de fondo actual
    const [imagenIndex, setImagenIndex] = useState(0);

    // Efecto para cambiar la imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes?.length); // Cambia al siguiente índice
        }, 3000);

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
                    <h1>RETIRO EN BÚZIOS ESPIRITUALIDAD</h1>
                </div>
                <p className="highlight">Un lugar mágico para tu transformación</p>
                <p className="highlight">All Inclusive PREMIUM</p>
                <p className="dates">8 días, 7 noches</p>
                <p className="highlight">Habitaciones de lujo con hidromasaje</p>
                <p className="gourmet">Pensión completa vegetariana gourmet</p>
            </section>

            <Servicios />

            <section className="hotel-info" id='blancoContenedor'>
                <div className='titleSection'>
                    <div className='separacion2'>
                        <div></div>
                        <span></span>
                    </div>
                    <h1>HOTEL INTERNACIONAL BÚZIOS ESPIRITUALIDAD</h1>
                </div>
                <p><strong>La estadía incluye:</strong></p>
                <p>Habitaciones de lujo con hidromasaje para relajarte y disfrutar de la naturaleza.</p>
                <p>Pensión completa vegetariana gourmet con exquisitos sabores. Incluye 7 desayunos, 7 cenas y 6 almuerzos, con entrada, plato principal, postre, agua y limonada.</p>
                <p>Actividades espirituales por la mañana y por la tarde, además de meditaciones en el oratorio.</p>
                <p>Acceso a instalaciones como piscina al aire libre, sauna y bañera de hidromasaje.</p>

                <h1>OBJETIVOS</h1>
                <p className="dates"><strong>Reconectar con tu esencia interior:</strong> Crear un espacio de introspección para descubrir tu verdadero ser y fortalecer tu conexión contigo mismo.</p>
                <p className="dates">Prácticas que promuevan la calma, la relajación y el equilibrio emocional.</p>
                <p className="dates"><strong>Fortalecer el bienestar físico, mental y espiritual:</strong> Integrar actividades que favorezcan la armonía entre cuerpo, mente y alma.</p>
                <p className="dates">Guiar procesos de reflexión para identificar patrones, sanar heridas y encontrar claridad en tu propósito.</p>
                <p className="dates"><strong>Conectar con la naturaleza:</strong> Disfrutar de la belleza y energía de Búzios, el mar como medio para sentir paz y plenitud.</p>
                <p className="dates"><strong>Cultivar hábitos de bienestar:</strong> Introducir herramientas prácticas como la meditación y ejercicios conscientes que puedas integrar a tu vida cotidiana.</p>
                <p className="dates"><strong>Abrir el corazón a nuevas perspectivas:</strong> Crear un entorno seguro para reflexionar, compartir y expandir tu conciencia personal.</p>
                <p className="dates"><strong>Establecer una comunidad de apoyo:</strong> Conocer personas con intereses similares y formar vínculos significativos que impulsen tu crecimiento personal.</p>
                <p className="dates"><strong>Celebrar la vida y el presente:</strong> Ofrecer momentos de gratitud, alegría y conexión con el aquí y ahora.</p>
                <p className="dates"><strong>Inspirar transformación duradera:</strong> Brindar experiencias y aprendizajes que impacten tu vida incluso después del retiro.</p>
            </section>

            <Itinerario />
        </div>
    );
}
