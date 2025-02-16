import React from 'react';
import './Footer.css';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.jpeg'
export default function Footer() {

    return (
        <div className='FooterContain'>
            <div className='footerText'>
                <img src={logo} alt="" />
            </div>

            <div className='footerText'>

                <p>Respetamos tu privacidad. Tus datos se almacenarán de forma segura y no se venderán, alquilarán ni compartirán de ninguna manera.</p>

                <p>© 2025 – DERECHOS RESERVADOS</p>
            </div>


        </div>
    );
}
