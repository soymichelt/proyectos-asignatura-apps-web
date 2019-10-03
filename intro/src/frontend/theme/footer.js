import React from 'react';
import FacebookIcon from './../../assets/fb.png';
import TwitterIcon from './../../assets/tw.png';
import InstagramIcon from './../../assets/im.png';

const Footer = (props) => {
    
    return (
        <footer className="footer">
            <a href="https://www.facebook.com">
                <img
                    src={FacebookIcon}
                />
            </a>
            <a href="https://twitter.com">
                <img
                    src={TwitterIcon}
                />
            </a>
            <a href="https://instagram.com">
                <img
                    src={InstagramIcon}
                />
            </a>
        </footer>
    );

};

export default Footer;