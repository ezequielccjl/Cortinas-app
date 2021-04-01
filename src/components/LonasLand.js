import React from 'react'
import logo from '../icons/logo-cortinas.png'
import '../CSS/lonasLand.css'

export const LonasLand = () => {
    return (
        <section className="section_lonas">
            
            <div className="titulo_section_lonas">
                <div className="cont_lonas">LONAS</div>
            </div>

            <div className="cont_lonas_img">
                
                <img src={logo} alt="logo" className="logo_lonas"></img>
                <div className="titulo_lonas">Contamos con amplio catálogo en telas de lona!</div>
                <div className="cont_btn_lonas">
                    <button className="btn_lonas">Consulta Aqui!</button>
                </div>
            </div>
        </section>
    )
}