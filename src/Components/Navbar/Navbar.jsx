import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.jpeg'
import 'swiper/swiper-bundle.css';
import './Navbar.css';
import contactData from '../contact';
import { useMediaQuery } from '@react-hook/media-query';
import banners from '../banner';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isScreenLarge = useMediaQuery('(min-width: 900px)');
    const contact = contactData[0];

    // Función para cerrar el modal y hacer scroll
    const handleClick = (className) => {
        setIsOpen(false); // Cierra el modal
        document.querySelector(className)?.scrollIntoView({ behavior: 'smooth' }); // Hace scroll hacia el elemento
    };

    return (
        <header>
            <nav>
                <Anchor to={`/`} className='logo'>
                    {isScreenLarge ? (
                        <img src={logo} alt="logo" />
                    ) : (
                        <img src={logo} alt="logo" />
                    )}
                </Anchor>

                <div className='deFLexNavs'>
                    <div className='enlaces'>
                        <Anchor to={`/`} onClick={() => handleClick('.BannerContain')}>Inicio</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.About')}>Sobre mi</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.Itinerario')}>Itinerario</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.Contact')}>Contacto</Anchor>
                    </div>

                    <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className='fondo'>
                        <img src={banners[0]} alt={``} />
                    </div>

                    <div className='enlaces2'>
                        <Anchor to={`/`} onClick={() => handleClick('.BannerContain')}>Inicio</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.About')}>Sobre mi</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.Itinerario')}>Itinerario</Anchor>
                        <Anchor to={`/`} onClick={() => handleClick('.Contact')}>Contacto</Anchor>
                    </div>
                </Modal>
            </nav>
        </header>
    );
}
