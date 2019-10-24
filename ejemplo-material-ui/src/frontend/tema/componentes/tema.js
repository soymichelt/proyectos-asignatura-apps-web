import React from 'react';

import Menu from './menu';
import PieDePagina from './pie-de-pagina';

const Tema = (props) => {

    const { children } = props;

    return (
        <>
            <Menu />
            <section className='contenido'>
                {children}
            </section>
            <PieDePagina />
        </>
    );
};

export default Tema;