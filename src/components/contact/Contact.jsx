import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm (
            "service_3u9ki6t", 
            "template_y6zc7av", 
            form.current, 
            "QgKnj1NKiqEUYd_uu"
        )
        e.target.reset()
    };

    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Ways to Connect:</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">promotion.kang.jay@gmail.com</span>

                        <a href="#contact" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon" ></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Contact Me To Get Started!</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Insert Your Name" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert Your Email" />
                    </div>

                    <div className="contact__form-div container__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Type Message Here..'></textarea>
                    </div>

                    <button type="submit" className="button button--flex">
                    Send Message
                    <svg className="button-icon" fill= "#00000" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 495.003 495.003" xml:space="preserve">
                    <g id="XMLID_51_">
                    <path fill="var(--container-color)" id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
                    l-67.6-32.22V456.687z"/>
                    <path fill="var(--container-color)" id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
                    c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
                    l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
                    L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"/>
                    </g>
                    </svg>  
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact