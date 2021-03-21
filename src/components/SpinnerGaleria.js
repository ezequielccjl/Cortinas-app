import React from 'react'
import '../CSS/spinnerGaleria.css'

export const SpinnerGaleria = () => {
    return(
        <div className="cont_spinner_galeria">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}