import React from 'react';

import Cuerpo from './../Tema/cuerpo';

import ImagenDeContacto from './../../assets/imagen.png';

const Contacto = () => {
    return (
        <Cuerpo>
            <h1>Estamos usando un tema</h1>
            <img
                src={ImagenDeContacto}
            />
        </Cuerpo>
    )
}

export default Contacto;