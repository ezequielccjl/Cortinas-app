import React from 'react'
import gif from '../icons/atencion.gif'

export const ModalForm = ({handlerModal}) => {
    return(
        <div className="modal_form">
            <img src={gif} alt="gif" className="gif"></img>
            <div className="texto_modal">Por favor,</div>
            <div className="texto_modal">Revise los valores ingresados.</div>
            <i class="fas fa-times" onClick={handlerModal}></i>
        </div>
    )
}