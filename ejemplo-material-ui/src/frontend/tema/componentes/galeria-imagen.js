import React from 'react';
import './galeria-imagen.css';

const GaleriaImagen = (props) => {

    const { dato } = props;

    return (
        <article className='galeria-imagen'>
            <h1
                className='titulo'
            >
                {dato.titulo}
            </h1>
            <img
                className='imagen'
                src={dato.imagen}
                alt={dato.titulo}
            />
        </article>
    );

};

export default GaleriaImagen;