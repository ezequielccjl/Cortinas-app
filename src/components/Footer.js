import React from 'react'
import '../CSS/footer.css'

export const Footer = () => {
    return(
        <section className="section_footer">
            <div className="copy text-center">CortinasYa© 2021 - Todos los derechos reservados</div>
            <div className="cont_icons">
                <a href="https://www.instagram.com/cortinasya.store/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a><i className="fab fa-facebook"></i></a>
                <a href="https://wa.link/ojcfsg" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
    )
}