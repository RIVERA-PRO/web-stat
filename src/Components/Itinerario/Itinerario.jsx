import React, { useState } from 'react';
import itinerario from '../Itinerario';
import Modal from 'react-modal';
import './Itinerario.css'
import { useMediaQuery } from '@react-hook/media-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function Itinerario() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDia, setSelectedDia] = useState(null);
    const isScreenLarge = useMediaQuery('(min-width: 700px)');

    const openModal = (dia) => {
        setSelectedDia(dia);
        setModalIsOpen(true);
    };

    return (
        <div className='Itinerario'>

            <div className='titleSection'>
                <div className='separacion'>
                    <span></span> <div></div> <span></span>
                </div>
                <h1>Retiro en Búzios ESPIRITUALIDADE Conexión con la Naturaleza Y EL MAR...</h1>
                <p>El camino hacia tu transformación comienza desde el primer día. </p>
            </div>
            <div className='ItinerarioGrap'>
                {itinerario.map((dia) => (
                    <div key={dia.id} onClick={() => openModal(dia)} className='ItinerarioCard'>
                        <img src={dia.imagenes[0]} alt='' /> {/* Solo muestra la primera imagen */}
                        <div className='ItinerarioCardText'>
                            <h3>{dia.dia}: {dia.titulo}</h3>
                            {isScreenLarge ?
                                <div>
                                    {dia?.actividades?.slice(0, 2).map((actividad, idx) => (
                                        <p key={idx}>{actividad.length > 40 ? actividad.slice(0, 40) + '...' : actividad}</p>
                                    ))}
                                </div>
                                :
                                <div>
                                    {dia?.actividades?.slice(0, 2).map((actividad, idx) => (
                                        <p key={idx}>{actividad.length > 20 ? actividad.slice(0, 20) + '...' : actividad}</p>
                                    ))}
                                </div>
                            }
                            <button>Ver más</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modalNav"
                overlayClassName="overlay"
            >
                {selectedDia && (
                    <div className='itinerarioDetaill'>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                            className='swiperDetail'
                        >
                            {selectedDia?.imagenes?.map((imagen, idx) => (
                                <SwiperSlide key={idx} className='swiperDetailCard'>
                                    <img src={imagen} alt={`Imagen ${idx + 1}`} style={{ width: '100%', height: '100%' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className='itinerarioDetaillText'>
                            <h3>{selectedDia.dia}: {selectedDia.titulo}</h3>

                            {selectedDia?.actividades?.map((actividad, idx) => (
                                <p key={idx}>{actividad}</p>
                            ))}
                            {selectedDia.descripcion && <p>{selectedDia.descripcion}</p>}
                            <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
                        </div>
                    </div>
                )}
            </Modal>
        </div >
    );
}
