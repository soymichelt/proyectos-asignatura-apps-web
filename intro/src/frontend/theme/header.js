import React from 'react';
import './header.css';

const Header = (props) => {
    
    return (
        <header className="header">
            <h1 className="header-title">
                {props.tituloMenu}
            </h1>
        </header>
    );

};

export default Header;