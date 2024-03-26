import React from 'react';

const Footer = () => {
    
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__copy">
            <p className="footer__copy__text">
                #seamosjustos {year} - Impulsado por Creative Lab Webs
            </p>
        </div>
    )
}

export default Footer;