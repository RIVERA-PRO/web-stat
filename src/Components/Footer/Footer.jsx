import React from 'react';
import './Footer.css';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png';
import contact from '../contact';

export default function Footer() {
    const contacto = contact[0]
    return (
        <div className='FooterContain'>
            <div className='footerText'>
                <img src={logo} alt="Logo" />
            </div>

            <div className='footerText'>

                <p>Respetamos tu privacidad. Tus datos se almacenarán de forma segura y no se venderán, alquilarán ni compartirán de ninguna manera.</p>
                <p>Teléfono: <a href={`tel:${contacto.telefono}`}>+{contacto.telefono}</a></p>
                <p>Email: <a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
                <p>Instagram: <a href={contacto.instagram} target="_blank" rel="noopener noreferrer">@cocrearsandra</a></p>

                <p>© 2025 – DERECHOS RESERVADOS</p>
            </div>


        </div>
    );
}
