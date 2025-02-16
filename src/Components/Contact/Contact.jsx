import React, { useState } from 'react';
import './Contact.css';
import contact from '../contact';

export default function Contact() {
    const phoneNumber = contact[0]?.telefono;
    const name = contact[0]?.nombre;
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        ciudad: '',
        mensaje: '',  // Aquí agregamos el campo para el mensaje
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleWhatsappMessage = () => {
        // Construimos el mensaje basado en los datos del formulario
        const message = `
            *Hola! ${name}⭐*\n\n*Nombre y Apellido:* ${formData.nombre}\n\n*Correo Electrónico:* ${formData.correo}\n\n*Teléfono Celular:* ${formData.telefono}\n\n*Provincia / Ciudad:* ${formData.ciudad}\n\n*Mensaje adicional:* ${formData.mensaje || 'Ninguno'}\n\n
        `;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsappMessage(); // Llamamos a la función para enviar el mensaje por WhatsApp
    };

    return (
        <div className='Contact'>

            <div className='titleSection'>
                <div className='separacion'>
                    <span></span> <div></div> <span></span>
                </div>
                <h1>Ponte en contacto con nosotros</h1>
            </div>
            <div className="contact-container">
                <div className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274317.228674334!2d-84.87924281686256!3d-36.49827895848304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1sen!2sar!4v1739715150500!5m2!1sen!2sar" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <fieldset>
                        <legend> Nombre y Apellido:</legend>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend> Correo Electrónico:</legend>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend>  Teléfono Celular - Wsp:</legend>
                        <input
                            type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend>  Provincia / Ciudad:</legend>
                        <input
                            type="text"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    {/* Cambié los checkboxes por un textarea */}
                    <fieldset>
                        <legend>Mensaje adicional:</legend>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Escribe cualquier mensaje o consulta adicional"
                        ></textarea>
                    </fieldset>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
