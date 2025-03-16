import React, { useState, useEffect } from 'react';
import contact from '../contact';
import './Reserva.css';
import imagenes from '../imagenes';

export default function Reserva() {
    const contacto = contact[0];
    // Estado para mantener la imagen de fondo actual
    const [imagenIndex, setImagenIndex] = useState(0);

    // Efecto para cambiar la imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes?.length);
        }, 3000);
        return () => clearInterval(interval);
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

            <div className='titleSection' id='blancoContenedor'>
                <div className='separacion'>
                    <span></span> <div></div> <span></span>
                </div>
                <h1>La magia del camino</h1>
                <p>Conecta con la magia de este viaje.</p>
                <h3>Vas a transformar tu vida</h3>
                <p>Únete a nosotros en el retiro en Búzios y descubre un espacio sagrado para renovarte, rejuvenecerte y conectar con tu esencia.</p>

                <p>Deja atrás el estrés y la rutina, y sumérgete en una experiencia única que te permitirá:</p>

                <p>Conectar con la naturaleza y el mar.</p>
                <p>Encontrar paz interior.</p>
                <p>Liberar emociones.</p>
                <p>Sanar tu corazón y conectar con la alegría y el disfrute de la vida.</p>
                <p>Desarrollar tu espiritualidad y encontrar tu propósito en la vida.</p>
                <p>Conectar con una comunidad de personas y una tribu que buscan lo mismo que tú.</p>
            </div>
        </div>
    );
}
