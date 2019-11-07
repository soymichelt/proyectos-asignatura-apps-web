import React, { Component } from 'react';
import Estudiantes from './../componentes/estudiantes';

class EstudiantesContenedor extends Component {

    constructor(props) {
        super(props);

        const estudiantes = [
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

    componentDidMount() {
        fetch('http://localhost:5000')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log('Error:', error);
        });
    }

}

export default EstudiantesContenedor;