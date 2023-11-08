import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactame.css'
import Navbar from '../navbar/navbar';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdzy2md', 'template_epvfr4l', form.current, '2V_h_0cVpDRyCfmoZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  
  
  
  <div className="container"> 
  <div><Navbar/></div>  
    <form ref={form} onSubmit={sendEmail}>
    <div className="row">
    <div className="col-25">
      <label className='label' for="fname">Nombre</label>
    </div>
    <div className="col-75">
      <input type="text" name="to_name" placeholder="Tú Nombre.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label className='label' for="fname">Email</label>
    </div>
    <div className="col-75">
      <input type="email" name="from_name" placeholder="Email.."/>
    </div>
  </div>
     
  <div className="row">
    <div className="col-25">
      <label className='label' for="subject">Mensaje</label>
    </div>
    <div className="col-75">
      <textarea id="subject" name="message" placeholder="Tú mensaje.." ></textarea>
    </div>
  </div>
   
     
      
      <div className="rowSub">
    <input type="submit" value="Send"/>
  </div>
    </form>
    

    {/* <button className='button'>
                <a
                  href='./CVEnzoMonti.pdf'
                  download={'./CVEnzoMonti.pdf'}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // download="CVEnzoMonti.pdf"
                >Descarga CV</a>
                
                </button> */}
    </div>
  );
};