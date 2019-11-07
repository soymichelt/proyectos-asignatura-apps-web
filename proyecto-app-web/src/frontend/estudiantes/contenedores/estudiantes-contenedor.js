import React, { Component } from 'react';
import Estudiantes from './../componentes/estudiantes';

class EstudiantesContenedor extends Component {

    constructor(props) {
        super(props);

        const estudiantes = [
            {
                nombre: 'Esther',
                apellidos: 'Duarte',
                edad: 20,
            },
            {
                nombre: 'Selena',
                apellidos: 'Gómez',
                edad: 20,
            },
            {
                nombre: 'Jehovany',
                apellidos: 'Romero',
                edad: 26,
            },
        ];

        this.state = {
            datos: estudiantes,
        };
    }

    render() {
        const { datos } = this.state;
        return (
            <Estudiantes
                listado={datos}
            />
        );
    }

}

export default EstudiantesContenedor;