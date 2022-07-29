import React, { useRef } from 'react'

import emailjs from "emailjs-com"
import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'enter your name' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+91 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'message',
  },
]

function Form()
{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhjlvne', 'template_exlbhwt', form.current, '7B0C7g8XTsstcHrVq')
      .then((result) => {
          alert("message has been sent successfully!")
          
      }, (error) => {
          console.log(error.text);
      });
      
  };
  return <div> <form ref={form} className="form" onSubmit={sendEmail} >
    <h2 className="form-h2">If you have any queries,feel free to send us message</h2>
    <label key={formInputs[0].label} id={formInputs[0].id} className="form-label" >
        {formInputs[0].label}
          <input
            className="form-input"
            type={formInputs[0].type}
            placeholder={formInputs[0].placeholder}
            name="name"
          />
          </label>
          <label key={formInputs[1].label} id={formInputs[1].id} className="form-label">
        {formInputs[1].label}
          <input
            className="form-input"
            type={formInputs[1].type}
            placeholder={formInputs[1].placeholder}
            name="phno"
          /></label>    
          
          <label key={formInputs[2].label} id={formInputs[2].id} className="form-label"> 
        {formInputs[2].label}
          <input
            className="form-input"
            type={formInputs[2].type}
            placeholder={formInputs[2].placeholder}
            name="user_email"
          /></label>
          
          <label key={formInputs[3].label} id={formInputs[3].id} className="form-label">
        {formInputs[3].label}
        <textarea className="form-textarea" placeholder={formInputs[3].placeholder}  name="message"/>
        </label>
       <button className='form-submit' type='submit'>submit</button>
  </form> </div>
}

export default Form;