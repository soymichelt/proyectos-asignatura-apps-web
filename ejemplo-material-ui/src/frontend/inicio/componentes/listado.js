import React from 'react';
import Item from './item';
import './listado.css';

const Listado = (props) => {

    const { imagenes } = props;

    return (
        <div className='listado'>
            {
                imagenes.map(item => {
                    return (
                        <Item
                            dato={item}
                        />
                    );
                })
            }
        </div>
    );

};

export default Listado;