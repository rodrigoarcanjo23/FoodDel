import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt nobis incidunt, fugiat voluptas perspiciatis porro obcaecati iusto nesciunt officia molestias eos hic. Omnis sit fuga adipisci dolorem quasi nisi.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Companhia</h2>
                    <ul>
                        <li>Home</li>
                        <li>Sobre nós</li>
                        <li>Delivery</li>
                        <li>Políticas de privacidade</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Entre em contato</h2>
                    <ul>
                        <li>Tel: 85-994108984</li>
                        <li>Email: rodrigoarcanjo690@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Todos os direitos reservados ©️Rodrigo Arcanjo-DEV™️
            </p>
        </div>
    )
}

export default Footer
