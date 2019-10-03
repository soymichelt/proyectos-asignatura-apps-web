import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    
    return (
        <>
            <Header />
            <section className="layout">
                {props.children}
            </section>
            <Footer />
        </>
    );

};

export default Layout;