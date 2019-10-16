import React from 'react';

import Pie from './pie';
import Encabezado from './encabezado';

import './cuerpo.css';

const Cuerpo = (props) => {
    return (
        <section>
            <Encabezado />
            {props.children}
            <Pie />
        </section>
    )
}

export default Cuerpo;