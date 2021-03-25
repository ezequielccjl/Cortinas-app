import React from 'react'
import '../CSS/producto.css'

export const Producto = ({item, listaTelas, animacion, dobles, cargarMedia}) => {
    return(
        <div className="cont_producto">
            <div className={`cover cover_` + item.id}>
                <div className="cont_titulo_sub animate__animated animate__fadeInDown">
                    <div className="titulo">{item.titulo}</div>
                    <div className="subtitulo">{item.subtitulo}</div>
                </div>
            </div>
            <div className="cont_muestra row">
                
                {cargarMedia(item)}

                <div className={`cont_ventajas col-xl-6 col-md-6 col-sm-12 cont_ul_${item.id}`}>
                    <div className="ventajas_titulo">Nuestras Ventajas!</div>
                    <ul className="ul_ventajas" >
                        {item.ventajas.map((ventaja)=>{
                            return(
                                <li className="li_ventajas animate__animated animate__backInRight" key={item.ventajas.indexOf(ventaja)}>
                                    {ventaja}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {
                dobles(item.id)
            }
            <div className="cont_telas">

                <div className="text-center nuestras_telas">NUESTRAS TELAS</div>
                <div className="linea_tela"></div>
                <div className="grid_telas">
                    {listaTelas.map((tela)=>{
                        return(
                            <div key={listaTelas.indexOf(tela)} className="una_tela">
                                <img className="img_tela" src={tela.img} alt={tela.nombre}></img>
                                <div className="nombre_tela">{tela.nombre}</div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    )
}