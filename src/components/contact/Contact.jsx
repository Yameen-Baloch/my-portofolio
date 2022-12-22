import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import {BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form  = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c61rhxz', 'template_jsvpefn', form.current, 'CCdrSpbTBtnb1u95D')
      
      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail  className='contact_icon'/>
            <h4>Email</h4>
            <h5>dummyyameen@gmail.com</h5>
            <a href="mailto:dummyyameen@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_icon' />
            <h4>Messanger</h4>
            <h5>Yameen Baloch</h5>
            <a href="https://m.me/yameen.baloch">Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>+92 318 000000</h5>
            <a href="https://api.whatsapp.com/phone=+923180000">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submilt' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact