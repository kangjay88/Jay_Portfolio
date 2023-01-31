import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">JK</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/kangjay88/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.facebook.com/jay.kang.98" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                
                <a href="https://www.instagram.com/j.kang88" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Jay Kang (Inspired by CrypticalCoder)
            </span>
        </div>
    </footer>
  )
}

export default Footer