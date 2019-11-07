import React from 'react';
import Item from './item';
import './listado.css';

const Listado = (props) => {

    const { imagenes } = props;

    return (
        <div className='listado'>
            {
                imagenes.map(imagen => {
                    return (
                        <Item
                            key={imagen.titulo}
                            dato={imagen}
                        />
                    );
                })
            }
        </div>
    );

};

export default Listado;