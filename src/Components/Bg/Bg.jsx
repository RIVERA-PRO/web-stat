import React, { useState, useEffect } from 'react';
import './Bg.css';
import imagenes from '../imagenes';

export default function Bg() {
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
        <div
            className="Bg"
            style={{
                position: 'relative',
                width: '100%',
                height: '50vh',
                backgroundImage: `url(${imagenAleatoria})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Capa oscura */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Oscurecimiento
                    zIndex: 1, // Asegura que esté encima de la imagen
                }}
            />

            {/* Contenido opcional dentro del div */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Aquí puedes agregar texto u otros elementos si lo deseas */}
            </div>
        </div>
    );
}
