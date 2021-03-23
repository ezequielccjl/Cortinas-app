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
                <Producto item={prodRender} animacion={animacion} />
            }
        </div>
    )
}