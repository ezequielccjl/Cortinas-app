import React from 'react'
import {Link} from 'react-router-dom'

import "../CSS/landing.css"

//Imagenes 
import translucida from '../imgProds/deco/deco.png'
import transparente from '../imgProds/sunscreen/sunscreen.png'
import blackout from '../imgProds/blackout/blackout.png'

import {LonasLand} from './LonasLand'


//Logo
import logo from '../icons/logo-cortinas.png'

export const Landing = () => {

    return (
        <div className="section-landing">
            <header className="landing-page">
                <div className="cont-titulos animate__animated animate__backInDown">
                    <div className="cont-logo-titulo">
                        <Link to="/contacto">
                            <img className="img_logo" src={logo} alt="logo"></img>
                        </Link>
                        <div className="titulo-landing">CORTINAS . YA</div>

                    </div>
                    <div className="subtitulo-landing">Fábrica de Cortinas y  Toldos de Lona.</div>
                </div>
            </header>

            <section className="section-ejemplos row">
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12 animate__animated animate__fadeIn">
                    <Link to="/productos/sunscreen">
                        <img className="muestra_land" src={transparente} alt="transparente"></img>
                    </Link>
                    <div>SUNSCREEN</div>
                    <div>Transparente</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12 animate__animated animate__fadeIn">
                    <Link to="/productos/deco">
                        <img className="muestra_land" src={translucida} alt="translucida"></img>
                    </Link>
                    <div>DECO</div>
                    <div>Translucida</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12 animate__animated animate__fadeIn">
                    <Link to="/productos/blackout">
                        <img className="muestra_land" src={blackout} alt="blackout"></img>
                    </Link>
                    <div>BLACK OUT</div>
                    <div>Oscuridad Total</div>
                </div>
            </section>

            <LonasLand />
        </div>

    )
}