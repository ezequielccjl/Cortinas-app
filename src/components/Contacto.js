import React from 'react';
import '../CSS/contacto.css'

import logo from '../icons/logo-cortinas.png'

export const Contacto = () => {
    return(
        <div className="cont_contacto">
            <div className="cont_tel">
                <div className="titulo_sec_contacto">CONTACTO</div>
                <div className="desc_tel">
                    <div className="nuestro_servicio">
                        <div className="text-center">¿Quieres contratar nuestro servicio? </div>
                        <div className="text-center">
                            <div>Escríbenos o llámanos. </div>
                            Tenemos la mejor disposición para proveerte toda la información que necesites y ayudarte con cualquier pregunta que puedas tener.
                        </div>
                    </div>
                    <div className="cont_contactanos">                        
                        <div className="text-center">¡Contáctanos!</div>
                        <div className="text-center">11 6041-5311  //  tienda.cortinasya@gmail.com</div>
                        <div className="text-center">Nos encontramos en Gral. Paz y Lope de Vega!</div>
                    </div>
                </div>
            </div>
            <div className="cont_mapa">
                <iframe className="mapa_contacto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7313523961457!2d-58.53148208516432!3d-34.61095418045752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7dd2340d59d%3A0xaa13ce30c71a6906!2sAv.%20Lope%20de%20Vega%20%26%20Av.%20Gral.%20Paz%2C%20B1675%20CABA!5e0!3m2!1ses-419!2sar!4v1614871294839!5m2!1ses-419!2sar" style={{border:0}} allowFullScreen="" importance="high"></iframe>
            </div>
            <div className="cont_form">
                
            </div>
            <div className="section_necesitas">
                <img className="img_contacto" src={logo} alt="logo"></img>
                <div className="necesitas">
                    <span>¿Necesitas tus cortinas?</span>
                    <span>¡Llamanos y te damos tu presupuesto!</span>
                </div>
                <div className="numero_necesitas">
                    <div className="line"></div>
                    <div> 11 6041-5311 </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}



