import React, {useEffect} from 'react'
import $ from 'jquery'
import '../CSS/navbar.css'

export const Navbar = () => {

    let nav, landing, total;

    function scrollHandler() {
        if (window.pageYOffset>total) {
            $(".titulo-nav").addClass("scroll-nav")
        }
        if (window.pageYOffset<total) {
            $(".titulo-nav").removeClass("scroll-nav")
        }
    }

    function calculoHeight() {
        nav = $(".navbar").height();
        landing = $(".landing-page").height();
        total = nav+landing-40;
    }

    useEffect(()=>{

        calculoHeight()

        window.addEventListener('scroll', scrollHandler)

        window.addEventListener('resize', calculoHeight);
        
        return ()=>{
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener('resize', calculoHeight);
        }

    },[])

    return(
        <div className="navbar">
            <div className="titulo-nav">
                CORTINAS . YA
            </div>
            <div className="nav-menu" >
                <ul className="nav-ul">
                    <li>
                        <a className="nav-link">Catálogo</a>
                    </li>
                    <li>
                        <a className="nav-link">Quiénes Somos</a>
                    </li>
                    <li>
                        <a className="nav-link">Galería</a>
                    </li>
                    <li>
                        <a className="nav-link">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}