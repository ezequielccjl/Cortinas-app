import React from 'react'
import '../CSS/producto.css'

export const Producto = ({item, animacion}) => {
    return(
        <div className="cont_producto">
            <div className={`cover cover_` + item.id}>
                <div className="cont_titulo_sub animate__animated animate__fadeInDown">
                    <div className="titulo">{item.titulo}</div>
                    <div className="subtitulo">{item.subtitulo}</div>
                </div>
            </div>
            <div className="cont_muestra row">
                <div className="cont_img_muestra col-xl-6 col-md-6 col-sm-12">
                    <img className="img_muestra" src={item.imgMuestra} alt={item.id}></img>
                </div>
                <div className="cont_ventajas col-xl-6 col-md-6 col-sm-12">
                    <div className="ventajas_titulo">Nuestras Ventajas!</div>
                    <ul className="ul_ventajas">
                        {item.ventajas.map((ventaja)=>{
                            return(
                                <li className="li_ventajas" key={item.ventajas.indexOf(ventaja)}>
                                    {ventaja}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="cont_telas">

                <div className="text-center nuestras_telas">NUESTRAS TELAS</div>
                {item.telas.map((tela)=>{
                    return(
                        <div className="tipo_tela" key={item.telas.indexOf(tela)} >
                            <div className="nombre_tela">{tela.nombre}</div>
                            <div className="linea_una_tela"></div>

                            <div className="row row_telas">
                                {tela.arrayTelas.map((una_tela)=>{
                                    return(
                                        <div className="col-xl-3 col-md-4 col-sm-12 una_tela" key={tela.arrayTelas.indexOf(una_tela)}>
                                            <img className="img_tela" src={una_tela.img}></img>
                                            <div className="pie_img">{una_tela.nombreTela}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}