import React, { Component } from 'react';
import PerfilEliminar from '../componentes/perfil-eliminar';
import {
    eliminarPublicacion,
    seleccionarPublicacion,
} from './../../../lib/data/perfil-data';
import { Redirect } from 'react-router-dom';

class PerfilEliminarContenedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            imagen: '',
            redirect: '',
        };
    }

    eventoClickEliminar = (event) => {
        const { publicacionId } = this.props.match.params;
        eliminarPublicacion(
            publicacionId
        );
        this.setState({
            titulo: '',
            imagen: '',
            redirect: '/',
        });
    }

    render() {

        const {
            titulo,
            imagen,
            redirect,
        } = this.state;

        if(redirect !== '') {
            return (
                <Redirect
                    to={redirect}
                />
            );
        }

        return (
            <PerfilEliminar
                titulo={titulo}
                imagen={imagen}
                eventoClickEliminar={this.eventoClickEliminar}
            />
        );

    }

    async componentDidMount() {
        const { publicacionId } = this.props.match.params;
        console.log(`Publicación Id: ${publicacionId}`);
        const publicacion = await seleccionarPublicacion(publicacionId);
        const { titulo, imagen, } = publicacion;
        this.setState({
            titulo,
            imagen,
        });
    }

}

export default PerfilEliminarContenedor;