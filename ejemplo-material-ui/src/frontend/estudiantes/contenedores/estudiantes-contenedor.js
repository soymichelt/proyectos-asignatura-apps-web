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
            estudianteseleccionado: "",
            datos: estudiantes,
        };
    }

    cambiarseleccionado=(valor) => {
        this.setState({estudianteseleccionado:valor})
    }

    render() {
        const { datos, estudianteseleccionado } = this.state;
        return (
            <Estudiantes
                seleccionar={this.cambiarseleccionado}
                seleccionado={estudianteseleccionado}
                listado={datos}
            />
        );
    }

}

export default EstudiantesContenedor;