import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import '../CSS/navbar.css'


export const Navbar = () => {
    
    let nav, landing, total;

    const categorias = [
        {
            id: "blackout",
            nombre: "Roller Black Out"
        },{
            id: "sunscreen",
            nombre: "Roller Sun Screen" 
        },{
            id: "deco",
            nombre: "Roller Deco"
        },{
            id: "impresas",
            nombre: "Roller Impresas"
        },{
            id: "motorizadas",
            nombre: "Roller Motorizadas"
        },{
            id: "verticales",
            nombre: "Verticales"
        },{
            id: "duo",
            nombre: "Duo"
        },{
            id: "horizontales",
            nombre: "Horizontales"
        }]

    function scrollHandler() {
        if (window.pageYOffset>total) {
            $(".navbar").addClass("scroll-nav")
            $(".cont_menu_catalogo").addClass("cont_menu_catalogo_scroll")
            $(".cont_menu_resp").addClass("cont_menu_resp_scroll")
        }
        if (window.pageYOffset<total) {
            $(".navbar").removeClass("scroll-nav")
            $(".cont_menu_resp").removeClass("cont_menu_resp_scroll")
            $(".cont_menu_catalogo").removeClass("cont_menu_catalogo_scroll")
        }
    }

    //HANDLER DEL NAV-LINK PRODUCTOS EN WEB
    function catalogoHandler() {
        //document.querySelector(".cont_menu_resp").classList.toggle("bajar_menu_resp");
        document.querySelector(".cont_menu_catalogo").classList.toggle("bajar_menu_catalogo");
        document.querySelector(".arrow-cont").classList.toggle("voltear-arrow-cont")
    }

    function catalogoHandlerArrow() {
        document.querySelector(".cont_menu_resp").classList.toggle("bajar_menu_resp");
        document.querySelector(".cont_menu_catalogo").classList.remove("bajar_menu_catalogo");
        document.querySelector(".arrow-cont").classList.toggle("voltear-arrow-cont")
    }

    //HANDLER DEL NAV-LINK PRODUCTOS EN WEB
    function catalogoHandlerResp() {
        document.querySelector(".cont_menu_catalogo").classList.toggle("bajar_menu_catalogo");
    }

    function calculoHeight() {
        nav = $(".navbar").height();
        landing = $(".img_logo").height();
        total = nav+landing-40;
    }

    useEffect(()=>{

        const opCatalogo = document.querySelector(".arrow-cont")
        const liCatalogo = document.querySelector(".nav-link-catalogo")

        calculoHeight()

        window.addEventListener('scroll', scrollHandler)

        window.addEventListener('resize', calculoHeight);

        opCatalogo.addEventListener("click", catalogoHandlerArrow)
        liCatalogo.addEventListener("click", catalogoHandler)
        
        return ()=>{
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener('resize', calculoHeight);
            opCatalogo.removeEventListener("click", catalogoHandler)
            liCatalogo.removeEventListener("click", catalogoHandler)
        }

    },[])

    return(
        <div className="cont-navbar">
            <div className="navbar">
                <div className="titulo-nav">
                    <Link to="/">
                        CORTINAS . YA
                    </Link>
                </div>
                <div className="nav-menu" >
                    <ul className="nav-ul">
                        {/* Las a's tenian de clase a nav-link */}
                        <li className="nav-link nav-link-catalogo">
                            
                            Productos
                            
                        </li>
                        <li className="nav-link">
                            <Link to="">
                                Galería
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contacto">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="arrow-cont">

                    </div>
                </div>
            </div>
            <div className="cont_menu_resp">
                <ul className="ul_resp">
                    <li onClick={catalogoHandlerResp} className="op_resp op_resp_catalogo">
                        Productos
                    </li>
                    <li className="op_resp">
                        <Link to="">
                            Galería
                        </Link>
                    </li>
                    <li className="op_resp">
                        <Link to="/contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="cont_menu_catalogo" >
                <ul className="ul_menu_catalogo">
                    {categorias.map((i)=>{
                        return(
                            <li key={categorias.indexOf(i)} className="li_menu-catalogo" onClick={catalogoHandler}>
                                <Link to= {`/productos/${i.id}`}>
                                    <div className="ancla">
                                    {i.nombre}
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}