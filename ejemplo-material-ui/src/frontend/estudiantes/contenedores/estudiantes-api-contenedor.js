import React, { Component } from 'react';

class EstudiantesAPIContenedor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: [],
        };
    }

    render() {
        const { datos } = this.state;
        return (
            <div>
                <h1>Detalle persona</h1>
                <hr />
                <h1>
                    Título: {datos.title}
                </h1>
                <p>
                    <b>Id: {datos.id}</b>
                </p>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            this.setState({
                datos: data,
            });
        });
    }

}

export default EstudiantesAPIContenedor;