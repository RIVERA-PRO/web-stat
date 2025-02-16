import React from 'react';
import './About.css';
import about from '../about'
import { Link as Anchor } from 'react-router-dom';
export default function About() {

    return (
        <div className='About'>

            <div className='titleSection'>
                <div className='separacion'>
                    <span></span> <div></div> <span></span>
                </div>
                <h1>Retiro Espiritual</h1>
                <h3>¿Te Sientes Estancado o Desconectado? Descubre cómo puedes transformar tu vida.</h3>
                <p>Este retiro te permitirá descubrir herramientas para vivir en mayor sincronía,
                    apreciar las bendiciones diarias y actuar desde el amor y la gratitud.</p>
            </div>


            <div className='profileAbout'>
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
            </div>


        </div>
    );
}
