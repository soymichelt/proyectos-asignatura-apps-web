import React from 'react';
import Listado from './listado';

const Inicio = (props) => {

    const { imagenes } = props;

    return (
        <div>
            <Listado
                imagenes={imagenes}
            />
        </div>
    );

};

export default Inicio;