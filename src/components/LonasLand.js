import React from 'react'
import logo from '../icons/logo-cortinas.png'
import '../CSS/lonasLand.css'
import {Link} from 'react-router-dom'

import toldo1 from '../imgs/toldos/galeria/toldo1.jpg'
import toldo2 from '../imgs/toldos/galeria/toldo2.jpg'
import toldo3 from '../imgs/toldos/galeria/toldo3.jpg'
import toldo4 from '../imgs/toldos/galeria/toldo4.jpg'
import toldo5 from '../imgs/toldos/galeria/toldo5.jpg'
import toldo6 from '../imgs/toldos/galeria/toldo6.jpg'
import toldo7 from '../imgs/toldos/galeria/toldo7.jpeg'

export const LonasLand = () => {

    const listaGaleria = [toldo1, toldo2, toldo3, toldo4, toldo5, toldo6, toldo7 ]

    return (
        <section className="section_lonas">
            
            <div className="titulo_section_lonas">
                <div className="cont_lonas">LONAS</div>
            </div>

            <div className="cont_lonas_img">
                
                <img src={logo} alt="logo" className="logo_lonas"></img>
                <div className="titulo_lonas">Contamos con amplio catálogo en toldos de lona!</div>
                <div className="cont_btn_lonas">
                    <Link to="/contacto">
                        <button className="btn_lonas">Consulta Aqui!</button>
                    </Link>
                </div>
            </div>

            <section className="galeria_toldos">

                <div className="titulo_galeria_toldo">Algunos de nuestros productos!</div>    

                <div className="cont_carousel">

                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo1} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo2} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo3} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo4} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo5} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo6} alt="toldo"></img>
                                </div>

                                <div className="carousel-item" data-bs-interval="10000">
                                    <img className="img_toldo" src={toldo7} alt="toldo"></img>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    
                    </div>

            </section>

        </section>
    )
}