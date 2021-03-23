import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {Producto} from './Producto'
import {listaCatalogo} from './ProductosJSON'

import '../CSS/productoContainer.css'

export const ProductoContainer = () => {

    //const data = require('./ProductosJSON');
    console.log("ARRAY PRODS: ",listaCatalogo);

    const [prodRender, setProdRender] = useState();

    const {idProducto} = useParams()

    function dobles(id) {
        if (id==="dobles") {
            return (
                <div className="cont_iframe">
                    <iframe className="iframe_yt" src="https://www.youtube.com/embed/fIZUyBRc6dk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )
        }else{
            if (id==="motorizadas") {
                return(
                    <div className="cont_iframe">
                        <iframe className="iframe_yt" src="https://www.youtube.com/embed/2EXuS10383U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
            }
        }
    }

    function cargarMedia(item) {
        if (item.id !== "motorizadas") {
            return(
                <div className="cont_img_muestra col-xl-6 col-md-6 col-sm-12">
                    <img className={`img_muestra img_${item.id}`} src={item.imgMuestra} alt={item.id}></img>
                </div>
            )
        }
    }

    const animacion = () => {
        document.querySelector(".cont_titulo_sub").classList.remove("animate__fadeInDown")
        setTimeout(()=>{
            document.querySelector(".cont_titulo_sub").classList.add("animate__fadeInDown")
        }, 100)
    }

    useEffect(()=>{
        console.log("params: ",idProducto)
        let cont = 0;
        listaCatalogo.forEach(item => {
            if(item.id === idProducto) {
                setProdRender(item)
                cont++
            } 
        });
        console.log(cont)
        cont===0 && setProdRender(undefined)

    }, [idProducto])

    useEffect(()=>{
        console.log(prodRender)
    }, [prodRender])

    return (
        <div className="section_producto">
            {
                prodRender === undefined ? <h1>No existe prod</h1>
                :  
                <Producto item={prodRender} animacion={animacion} dobles={dobles} cargarMedia={cargarMedia}/>
            }
        </div>
    )
}