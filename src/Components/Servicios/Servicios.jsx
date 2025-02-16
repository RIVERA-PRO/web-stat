import React from 'react';
import servicios from '../servicios';
import './Servicios.css'
export default function Servicios() {
    return (
        <div className='Servicios'>
            {servicios?.map((servicio, index) => (
                <div key={index} className='ServicioCard'>
                    <h3>{servicio.titulo}</h3>
                    <p>{servicio.descripcion}</p>
                </div>
            ))}
        </div>
    );
}
