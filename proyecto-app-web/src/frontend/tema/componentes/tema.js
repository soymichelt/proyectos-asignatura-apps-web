import React from 'react';

import Menu from './menu';
import PieDePagina from './pie-de-pagina';

const Tema = (props) => {

    const {
        children,
        usuario,
        cerrarSesion,
    } = props;

    return (
        <>
            <Menu
                usuario={usuario}
                cerrarSesion={cerrarSesion}
            />
            <section className='contenido'>
                {children}
            </section>
            <PieDePagina />
        </>
    );
};

export default Tema;