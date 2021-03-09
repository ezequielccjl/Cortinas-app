import React from 'react'
import '../CSS/infoContacto.css'

export const InfoContacto = () => {
    return (
        <div className="cont_info col-xl-7 col-sm-7 col-xs-12">
            <div className='titulo_sec_contacto'>CONTACTO</div>

            <div className="linea"></div>
            <div>Tel: 11-6041-5311</div>
            <div>Email: tienda.cortinasya@gmail.com</div>
            <div>
                <i className="fab fa-facebook"></i>
                <a href="https://www.instagram.com/cortinasya.store/?hl=es-la" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

        </div>
    )
}