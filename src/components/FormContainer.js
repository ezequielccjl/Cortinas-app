import React from 'react'
import emailjs, { send } from 'emailjs-com'
import {Form} from './Form'

export const FormContainer = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_38td5ue', 'template_bxk8seo', e.target, 'user_OrxzRAQKkHbe84z97DTOj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
        
        e.target.reset()
    }

    return(
        <div className="cont_form col-xl-5 col-sm-5 col-xs-12">
            <Form enviarEmail={sendEmail}/>
        </div>
    )
}