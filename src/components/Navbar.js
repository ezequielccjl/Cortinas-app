import React, {useEffect} from 'react'
import $ from 'jquery'
import '../CSS/navbar.css'

export const Navbar = () => {

    let nav, landing, total;

    const categorias = ["Roller Black Out","Roller Sun Screen","Roller Deco","Roller Impresas","Roller Motorizadas","Verticales","Duo","Horizontales"]

    function scrollHandler() {
        if (window.pageYOffset>total) {
            $(".navbar").addClass("scroll-nav")
            $(".cont_menu_catalogo").addClass("cont_menu_catalogo_scroll")
        }
        if (window.pageYOffset<total) {
            $(".navbar").removeClass("scroll-nav")
            $(".cont_menu_catalogo").removeClass("cont_menu_catalogo_scroll")
        }
    }

    function catalogoHandler() {
        $(".cont_menu_catalogo").toggleClass("bajar_menu_catalogo");
        $(".arrow-cont").toggleClass("voltear-arrow-cont")
    }

    function calculoHeight() {
        nav = $(".navbar").height();
        landing = $(".landing-page").height();
        total = nav+landing-40;
    }

    useEffect(()=>{

        const opCatalogo = document.querySelector(".arrow-cont")

        calculoHeight()

        window.addEventListener('scroll', scrollHandler)

        window.addEventListener('resize', calculoHeight);

        opCatalogo.addEventListener("click", catalogoHandler)
        
        return ()=>{
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener('resize', calculoHeight);
            opCatalogo.removeEventListener("click", catalogoHandler)
        }

    },[])

    return(
        <div className="cont-navbar">
            <div className="navbar">
                <div className="titulo-nav">
                    CORTINAS . YA
                </div>
                <div className="nav-menu" >
                    <ul className="nav-ul">
                        <li>
                            <a className="nav-link nav-link-catalogo">Catálogo</a>
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
                    <div className="arrow-cont">

                    </div>
                </div>
            </div>
            <div className="cont_menu_catalogo" >
                <ul className="ul_menu_catalogo">
                    {categorias.map((i)=>{
                        return(
                            <li key={categorias.indexOf(i)} className="li_menu-catalogo">{i}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}