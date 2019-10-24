import React from 'react';
import './estudiantes.css';

const Estudiantes = (props) => {

    const { listado } = props;

    return (
        <div>
            {
                listado.map(
                    (item) => {

                        return (
                            <div
                                key={item.nombre}
                                className='un-estudiante'
                            >
                                <p>{item.nombre}</p>
                                <p>{item.apellidos}</p>
                                <p>{item.edad}</p>
                            </div>
                        );

                    }
                )
            }
        </div>
    );

}

export default Estudiantes;