import React, {useEffect} from 'react'
import $ from 'jquery'

import "../CSS/landing.css"

//Imagenes 
import translucida from '../imgs/translucida.png'
import transparente from '../imgs/transparente.png'
import blackout from '../imgs/blackout.png'

//Logo
import logo from '../icons/logo-cortinas.png'

export const Landing = () => {

//.titulo-landing

    

    return (
        <div className="section-landing">
            <header className="landing-page">
                <div className="cont-titulos">
                    <div className="cont-logo-titulo">
                        <img src={logo} alt="logo"></img>
                        <div className="titulo-landing">CORTINAS . YA</div>

                    </div>
                    <div className="subtitulo-landing">Fábrica de cortinas roller y black out.</div>
                </div>
            </header>

            <section className="section-ejemplos row">
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={transparente}></img>
                    <div>SUNSCREEN</div>
                    <div>Transparente</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={translucida}></img>
                    <div>DECO</div>
                    <div>Translucida</div>
                </div>
                <div className="item-landing col-xl-4 col-lg-4 col-xs-12">
                    <img src={blackout}></img>
                    <div>BLACK OUT</div>
                    <div>Oscuridad Total</div>
                </div>
            </section>
        </div>

    )
}