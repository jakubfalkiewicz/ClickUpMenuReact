import React from 'react'
import './Footer.scss'
import { phone } from '@/assets'


function Footer() {
    return (
        <footer>
            <div className='footer-component'>
                <div className='footer-phone'><img src={phone} alt="phone-icon"></img></div>
                <div className='footer-contact'>
                    <div className='footer-contact-title'>Contact Us</div>
                    <div className='footer-contact-text'>Get in touch with our 24/7 live support team for free.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer