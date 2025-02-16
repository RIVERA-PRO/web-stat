import React from 'react';
import './Galery.css';
import imagenes from '../imagenes';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

export default function Galery() {
    // Mezclamos el array de imágenes de manera aleatoria
    const imagenesAleatorias = [...imagenes].sort(() => Math.random() - 0.5).slice(0, 100);

    return (
        <div className='Galery'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true} // Permite que el carrusel sea infinito
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                navigation={false} // Desactiva los controles de navegación manual
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-scroll infinito cada 2 segundos
                className='swiper-container'
            >
                {imagenesAleatorias?.map((imagen, index) => (
                    <SwiperSlide key={index} className='swiper-card'>
                        <img src={imagen} alt={``} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
