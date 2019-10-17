import React from 'react';
import './item.css';

const Item = (props) => {

    const { dato } = props;

    return (
        <div className='item'>
            <img
                src={dato.imagen}
            />
            <p>
                {dato.titulo}
            </p>
        </div>
    );

};

export default Item;