import React from 'react';
import './galeria-imagen.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
            <Button
                variant="contained"
                color="secondary"
                component={ Link }
                to={`/eliminar/${dato.id}`}
            >
                Eliminar
            </Button>
        </article>
    );

};

export default GaleriaImagen;