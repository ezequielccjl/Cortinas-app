import React from 'react'
import '../CSS/form.css'

export const Form = ({enviarEmail, validacion}) => {
    return(
        <form className="form" onSubmit={enviarEmail}>
                
                <input 
                    id="nombre"
                    name="nombre"
                    className="un_input" 
                    required 
                    placeholder="Ingrese su nombre"
                    type="text"
                    autoComplete="off"
                    onKeyUp={validacion}
                    >
                </input>
    

                <input 
                    id="email"
                    name="email"
                    className="un_input" 
                    required 
                    placeholder="Ingrese su correo"
                    type="text"
                    autoComplete="off"
                    onKeyUp={validacion}>
                </input>


                <input 
                    id="telefono"
                    name="telefono"
                    className="un_input" 
                    required 
                    placeholder="Ingrese su telefono"
                    type="number"
                    autoComplete="off"
                    onKeyUp={validacion}>
                </input>


                <textarea 
                    id="mensaje"
                    name="mensaje"
                    className="un_input" 
                    required
                    placeholder="Ingrese su consulta"
                    type="text"
                    autoComplete="off"
                    onKeyUp={validacion}>
                </textarea>
            

            <div className="cont_btn_submit">
                <input type="submit" className="btn_submit" value="Enviar"></input>
            </div>
        </form>
    )
}