import React, { useState, useEffect } from 'react';
import './About.css';
import about from '../about'
import introduccion from '../introduccion'
import imagenes from '../imagenes';
export default function About() {
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
        <div className='About'>
            <div className="info-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    backgroundImage: `url(${imagenAleatoria})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}>
                <div className='titleSection' id='blancoContenedor'>
                    <div className='separacion'>
                        <span></span> <div></div> <span></span>
                    </div>
                    <h1>RETIRO EN BUZIOS </h1>
                    <p>Te invitamos a formar parte de un <strong>RETIRO ESPIRITUAL en BUZIOS RÍO de Janeiro,</strong>  un destino que combina la belleza natural, la serenidad y la <strong>conexión</strong> con lo divino. Este espacio ha sido diseñado especialmente para <strong>reconectar</strong> con nuestra <strong>esencia</strong> y abrirnos a una <strong>transformación</strong> personal profunda.</p>
                    <p>Un gran encuentro para <strong>reflexionar, sanar y crecer,</strong> rodeado de paisajes imponentes que te llenarán de energía y paz. Cada detalle ha sido pensado para brindarte una experiencia enriquecedora, desde las actividades diarias hasta el confort del alojamiento, para que vivas días de verdadera <strong>plenitud y equilibrio.</strong></p>
                    <p>Permíteme guiarte en este camino de autodescubrimiento, donde encontrarás herramientas y espacios para abrir tu corazón y conectar con la <strong>magia</strong> de tu ser. Este retiro no es solo un viaje físico, sino un viaje <strong>espiritual</strong> que transformará tu vida.</p>
                    <img src={introduccion} alt="" />

                </div>
            </div>




            {/* <div className='profileAbout'>
                <img src={about} alt="" />
                <div className='profileAboutText'>
                    <h2>Sobre Mi</h2>
                    <p>Soy Sandra Antonia Alves, Mujer Medicina. Soy hija, madre y abuela.</p>
                    <p>Soy Guardiana de la Tierra y Guardiana del Útero, Linaje Pampamisayoq...</p>
                    <p>También soy terapeuta en Biodecodificación, iniciada en Astrología y Consteladora Familiar.</p>
                    <p>Camino hace 20 años en este camino hacia mi Medicina Interior y acompaño a otros en su recorrido.</p>
                    <p>También soy artista. Ingresé al teatro durante 20 años como directora y actriz, soy escritora y poeta.</p>

                    <p>Autora de los libros de poesía y dramaturgia: *Caminando en mi interior*, *Desnudando el alma*, *Alegra la niña salvaje*, *La que los parió*, *Mi mayor pecado*, *Entre el fuego y las ideas*.</p>
                    <p>¡Abrazo tu corazón y el mío ahora!</p>

                    <button to={`/`} onClick={() => {
                        document.querySelector('.Contact').scrollIntoView({ behavior: 'smooth' });
                    }}>Contacto</button>
                </div>
            </div> */}


        </div>
    );
}
