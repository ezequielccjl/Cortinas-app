import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
//import $ from 'jquery'
import '../CSS/navbar.css'


export const Navbar = () => {
    
    let navH, landingH, total;
    let nav, landing;

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
        },{
            id: "dobles",
            nombre: "Dobles"
        }]

    function scrollHandler() {
        if (window.pageYOffset>total) {
            document.querySelector(".navbar").classList.add("scroll-nav")
            document.querySelector(".cont_menu_catalogo").classList.add("cont_menu_catalogo_scroll")
            document.querySelector(".cont_menu_resp").classList.add("cont_menu_resp_scroll")
        }
        if (window.pageYOffset<total) {
            document.querySelector(".navbar").classList.remove("scroll-nav")
            document.querySelector(".cont_menu_resp").classList.remove("cont_menu_resp_scroll")
            document.querySelector(".cont_menu_catalogo").classList.remove("cont_menu_catalogo_scroll")
        }
    }

    //HANDLER DEL NAV-LINK PRODUCTOS EN WEB
    function catalogoHandler() {
        document.querySelector(".cont_menu_resp").classList.toggle("bajar_menu_resp");
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
        //console.log("SE EJECUTA EL CALCULO HEIGHT")
        if(nav !== null && landing !==null){
            navH = nav.clientHeight
            landingH = landing.clientHeight;
            total = navH+landingH-40;
        }
    }

    useEffect(()=>{

        nav = document.querySelector(".navbar")
        landing = document.querySelector(".img_logo")

        const opCatalogo = document.querySelector(".arrow-cont")
        const liCatalogo = document.querySelector(".nav-link-catalogo")

        //calculoHeight()

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
                        GRUPO ROLLERS
                    </Link>
                </div>
                <div className="nav-menu" >
                    <ul className="nav-ul">
                        <li className="nav-link">
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-link nav-link-catalogo">
                            Productos
                        </li>
                        <li className="nav-link">
                            <Link to="/galeria">
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
                    <li className="op_resp" onClick={catalogoHandlerArrow}>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>
                    <li onClick={catalogoHandlerResp} className="op_resp op_resp_catalogo">
                        Productos
                    </li>
                    <li className="op_resp" onClick={catalogoHandlerArrow}>
                        <Link to="/galeria">
                            Galería
                        </Link>
                    </li>
                    <li className="op_resp" onClick={catalogoHandlerArrow}>
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