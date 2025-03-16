import React from 'react'
import './Demo.css'
import Footer from '../../Components/Footer/Footer'
import BtnWhatsapp from '../../Components/BtnWhatsapp/BtnWhatsapp'
import ButonScroll from '../../Components/ButonScroll/ButonScroll';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Servicios from '../../Components/Servicios/Servicios';
import Itinerario from '../../Components/Itinerario/Itinerario';
import Galery from '../../Components/Galery/Galery';
import Videos from '../../Components/Videos/Videos';
import Info from '../../Components/Info/Info';
import Contact from '../../Components/Contact/Contact';
import Bg from '../../Components/Bg/Bg';
import Reserva from '../../Components/Reserva/Reserva';
import about from '../../Components/about'
import final from '../../images/final.jpg'
export default function Demo() {
    return (
        <section className='demo'>


            <Banner />
            <About />
            <Galery />

            {/* <Servicios /> */}
            <Info />
            {/* <Bg /> */}
            {/* <Itinerario /> */}
            <Reserva />
            <Videos />

            {/* <div className='About'>



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


            </div> */}
            <div className='final'>
                <img src={final} alt="" />
            </div>
            <Contact />
            <Footer />
            <ButonScroll />
            <BtnWhatsapp />
        </section>
    )
}
