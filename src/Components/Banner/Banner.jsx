import React from 'react';
import './Banner.css';
import banners from '../banner';  // Asegúrate de que la ruta de importación sea correcta
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Inicia los módulos de Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Banner() {
    return (
        <div className='BannerContain'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                id='swiper_container'
            >
                {banners?.map((image, index) => (
                    <SwiperSlide id='SwiperSlide-scroll' key={index}>
                        <img src={image} alt={`imagen-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
