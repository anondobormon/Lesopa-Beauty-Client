import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className='footerArea'>
            <div className="footer col-md-6">
                <div>
                    <h3 className='text-color pt-5 pb-3'>Leospa</h3>
                </div>
                <div className="footer-detail">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Feature</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-icon">
                    <div className="icon">
                        <ul>
                            <li className='icon-style' style={{ color: 'tomato' }}><FontAwesomeIcon icon={faFacebook} /></li>
                            <li className='icon-style' style={{ color: 'black' }}><FontAwesomeIcon icon={faTwitter} /></li>
                            <li className='icon-style' style={{ color: 'gray' }}><FontAwesomeIcon icon={faYoutube} /></li>
                            <li style={{ color: 'tomato', fontSize: '20px' }}><FontAwesomeIcon icon={faTwitter} /></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;