import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import "../CSS/landing.css"

//Imagenes 
import translucida from '../imgs/translucida.png'
import transparente from '../imgs/transparente.png'
import blackout from '../imgs/blackout.png'


//Logo
import logo from '../icons/logo-cortinas.png'

export const Landing = () => {

    return (
        <div className="section-landing">
            <header className="landing-page">
                <div className="cont-titulos">
                    <div className="cont-logo-titulo">
                        <Link to="/contacto">
                            <img src={logo} alt="logo"></img>
                        </Link>
                        <div className="titulo-landing">CORTINAS . YA</div>

                    </div>
                    <div className="subtitulo-landing">Fábrica de cortinas roller y black out.</div>
                </div>
            </header>

            <section className="section-ejemplos row">
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={transparente} alt="transparente"></img>
                    <div>SUNSCREEN</div>
                    <div>Transparente</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={translucida} alt="translucida"></img>
                    <div>DECO</div>
                    <div>Translucida</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={blackout} alt="blackout"></img>
                    <div>BLACK OUT</div>
                    <div>Oscuridad Total</div>
                </div>
            </section>
        </div>

    )
}