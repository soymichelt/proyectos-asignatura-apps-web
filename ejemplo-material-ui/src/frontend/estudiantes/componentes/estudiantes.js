import React from 'react';
import './estudiantes.css';

const Estudiantes = (props) => {

    const { listado, seleccionado, seleccionar } = props;

    return (
        <div>
            {
                listado.map(
                    (item) => {
                        /*if (seleccionado===item.nombre)*/
                        return (
                            <div onClick={()=> seleccionar(item.nombre)}
                                key={item.nombre}
                                className={ seleccionado===item.nombre ? 'estudiante-seleccionado' : 'un-estudiante' }
                            >
                                <p>{item.nombre}</p>
                            </div>
                        );
                        /*else
                        return (
                            <div onClick={()=> seleccionar(item.nombre)}
                                key={item.nombre}
                                className='un-estudiante'
                            >
                                <p>{item.nombre}</p>
                                <p>{item.apellidos}</p>
                                <p>{item.edad}</p>
                            </div>
                        );*/

                    }
                )
            }
        </div>
    );

}

export default Estudiantes;