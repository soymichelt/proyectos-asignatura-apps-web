import React, { Component } from 'react';
import Estudiantes from './../componentes/estudiantes';

class EstudiantesContenedor extends Component {

    constructor(props) {
        super(props);

        const estudiantes = [
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