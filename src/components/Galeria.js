import React, { useEffect, useState } from 'react'
import {SpinnerGaleria} from './SpinnerGaleria'
import '../CSS/galeria.css'
import cerrar from '../icons/cerrar-64.png'

import galeria1 from '../galeria/galeria1.jpg'
import galeria2 from '../galeria/galeria2.jpg'
import galeria3 from '../galeria/galeria3.jpg'
import galeria4 from '../galeria/galeria4.jpg'
import galeria5 from '../galeria/galeria5.jpg'
import galeria6 from '../galeria/galeria6.jpg'
import galeria7 from '../galeria/galeria7.jpg'
import galeria8 from '../galeria/galeria8.jpg'
import galeria9 from '../galeria/galeria9.jpg'
import galeria10 from '../galeria/galeria10.jpg'
import galeria11 from '../galeria/galeria11.jpg'
import galeria12 from '../galeria/galeria12.jpg'
import galeria13 from '../galeria/galeria13.jpg'
import galeria14 from '../galeria/galeria14.jpg'
import galeria15 from '../galeria/galeria15.jpg'
import galeria16 from '../galeria/galeria16.jpg'
import galeria17 from '../galeria/galeria17.jpg'
import galeria18 from '../galeria/galeria18.jpg'
import galeria19 from '../galeria/galeria19.jpg'

export const Galeria = () => {


    const listaGaleria = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10, galeria11, galeria12, galeria13, galeria14, galeria15, galeria16, galeria17, galeria18, galeria19]

    const [cargarCompleto, setCargar] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [imgMostrar, setImgMostrar] = useState(galeria1)

    const cargarHandler = () => {
        setCargando(true)
        setTimeout(()=>{
            setCargando(false)
            setCargar(true)
        },500)
    }

    const modalImg = (foto) => {
        setImgMostrar(foto)
        document.querySelector(".modal-img").classList.toggle("bajar_img_modal")
    }

    useEffect(()=>{
        setCargar(false)
    }, [])

    return (
        <section className="section_galeria">

            <div className="modal-img">
                <img src={cerrar} alt="cerrar" className="cerrar_icon" onClick={modalImg}></img>
                <img src={imgMostrar} alt="img-modal" className="img_modal"></img>
            </div>
            
            <div className="header_galeria ">
                <div className="cont_header_g ">
                    <div className="titulo_galeria animate__animated animate__backInDown">NUESTRA GALERÍA</div>
                    <div className="subtitulo_galeria">Mirá nuestros productos acá!</div>
                    <div className="arrow bounce">
                        <i className="fa fa-arrow-down" ></i>
                    </div>
                </div>
            </div>
            
            <div className="row cont_galeria">
                {
                    cargarCompleto === false ?
                    listaGaleria.map((foto, i) => {
                        if(i<8){
                            return(
                                <div className="col-xl-3 col-lg-4 col-md-6 img_cont_galeria" key={i}>
                                    <div className="hover_img">
                                        <img className="img_galeria animate__animated animate__fadeIn" src={foto} onClick={()=>{modalImg(foto)}}></img>
                                    </div>
                                </div>
                            )
                        }
                    })
                    :
                    listaGaleria.map((foto, i) => {
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 img_cont_galeria" key={i}>
                                <div className="hover_img">
                                    <img className="img_galeria animate__animated animate__fadeIn" src={foto} onClick={()=>{modalImg(foto)}}></img>
                                </div>
                            </div>
                        )
                    })
                }
                { 
                    cargarCompleto===false &&
                    <div className="cont_btn_cargar">
                        <button className="btn_cargar" onClick={cargarHandler}>Cargar más</button>
                    </div>
                }
                {
                    cargando === true &&
                    <SpinnerGaleria />
                }
            </div>
        </section>
    )
}