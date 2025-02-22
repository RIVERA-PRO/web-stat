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
export default function Demo() {
    return (
        <section className='demo'>


            <Banner />
            <About />
            <Galery />

            {/* <Servicios /> */}
            <Info />
            {/* <Bg /> */}
            <Itinerario />
            <Videos />
            <Contact />
            <Footer />
            <ButonScroll />
            <BtnWhatsapp />
        </section>
    )
}
