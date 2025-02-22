import React from 'react';
import servicios from '../servicios';
import './Servicios.css';

export default function Servicios() {

    return (
        <section className='Servicios' id='blancoContenedor'>
            {servicios?.map((servicio, index) => (
                <div key={index} className='ServicioCard'>
                    <div className='titleSection'>
                        <div className='separacion2'>
                            <div></div>
                            <span></span>
                        </div>
                        <h1>{servicio.titulo}</h1>
                    </div>
                    <p>{servicio.descripcion}</p>
                    <div className='ImagenesServicio'>
                        {servicio?.imagenes?.map((imagen, imgIndex) => (
                            <img key={imgIndex} src={imagen} alt={``} />
                        ))}
                    </div>


                </div>
            ))}
        </section>
    );
}
