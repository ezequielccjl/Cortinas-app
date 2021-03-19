import React from 'react'
import '../CSS/galeria.css'

import galeria1 from '../galeria/galeria1.jpg'
import galeria2 from '../galeria/galeria2.jpg'
import galeria3 from '../galeria/galeria3.jpg'
import galeria4 from '../galeria/galeria4.jpg'
import galeria5 from '../galeria/galeria5.jpg'
import galeria6 from '../galeria/galeria6.jpg'
import galeria7 from '../galeria/galeria7.jpg'
import galeria8 from '../galeria/galeria8.jpg'
import galeria9 from '../galeria/galeria9.jpg'
import galeria10 from '../galeria/galeria10.jpg'
import galeria11 from '../galeria/galeria11.jpg'
import galeria12 from '../galeria/galeria12.jpg'
import galeria13 from '../galeria/galeria13.jpg'
import galeria14 from '../galeria/galeria14.jpg'
import galeria15 from '../galeria/galeria15.jpg'
import galeria16 from '../galeria/galeria16.jpg'
import galeria17 from '../galeria/galeria17.jpg'
import galeria18 from '../galeria/galeria18.jpg'
import galeria19 from '../galeria/galeria19.jpg'

export const Galeria = () => {


    const listaGaleria = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7, galeria8, galeria9, galeria10, galeria11, galeria12, galeria13, galeria14, galeria15, galeria16, galeria17, galeria18, galeria19]

    return (
        <section className="section_galeria">
            <div>NUESTRA GALERÍA</div>
            <div className="row cont_galeria">
                {listaGaleria.map((foto) => {
                    return(
                        <div className="col-xl-3 col-lg-4 col-md-6 img_cont_galeria" key={listaGaleria.indexOf(foto)}>
                            <div className="hover_img">
                                <img className="img_galeria animate__animated animate__fadeIn" src={foto}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}