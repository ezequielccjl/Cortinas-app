import React, {useState} from 'react'
import emailjs, { send } from 'emailjs-com'
import {Form} from './Form'
import {ModalForm} from './ModalForm'

export const FormContainer = () => {

    const [nombreValido, setNombreValido] = useState(false)
    const [mailValido, setMailValido] = useState(false)
    const [telValido, setTelValido] = useState(false)
    const [mensajeValido, setMenValido] = useState(false)

    
    const validacion = () => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        const nom = document.querySelector("#nombre")
        const email = document.querySelector("#email")
        const tel = document.querySelector("#telefono")
        const mensaje = document.querySelector("#mensaje")

        //Validación nombre
        const nombre = nom.value
        if (nombre !== "" && nombre !== " " && nombre !== null && nombre !== undefined) {
            setNombreValido(true)
            nom.classList.add("input_valido")
            nom.classList.remove("input_invalido")
        }else{
            setNombreValido(false)
            nom.classList.remove("input_valido")
            nom.classList.add("input_invalido")
        }

        //Validacion Mail
        if(email.value.match(pattern)){
            setMailValido(true)
            email.classList.add("input_valido")
            email.classList.remove("input_invalido")
        }else{
            setMailValido(false)
            email.classList.remove("input_valido")
            email.classList.add("input_invalido")
        }

        //Validacion telefono
        const telefono = tel.value
        if (telefono.length > 7 && telefono !== null && telefono !== undefined) {
            setTelValido(true)
            tel.classList.add("input_valido")
            tel.classList.remove("input_invalido")
        }else{
            setTelValido(false)
            tel.classList.remove("input_valido")
            tel.classList.add("input_invalido")
        }

        //Validacion telefono
        const men = mensaje.value
        if (men.length > 5 && men !== null && men !== undefined) {
            setMenValido(true)
            mensaje.classList.add("input_valido")
            mensaje.classList.remove("input_invalido")
        }else{
            setMenValido(false)
            mensaje.classList.remove("input_valido")
            mensaje.classList.add("input_invalido")
        }
        
    }

    const handlerModal = () => {
        document.querySelector(".modal_form").classList.toggle("subir_advertencia")
    }



    function sendEmail(e) {
        
        if(nombreValido===true && mailValido===true && telValido===true && mensajeValido===true){
            e.preventDefault();
        
            emailjs.sendForm('service_38td5ue', 'template_bxk8seo', e.target, 'user_OrxzRAQKkHbe84z97DTOj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            e.target.reset()
        }else{
            e.preventDefault();
            document.querySelector(".modal_form").classList.toggle("subir_advertencia")
        }

    }

    return(
        <div className="cont_form col-xl-5 col-sm-5 col-xs-12">
            <ModalForm handlerModal={handlerModal} />
            <Form enviarEmail={sendEmail} validacion={validacion}/>
        </div>
    )
}