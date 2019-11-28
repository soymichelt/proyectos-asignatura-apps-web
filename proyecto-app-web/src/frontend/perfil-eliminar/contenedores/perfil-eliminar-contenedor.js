import React, { Component } from 'react';
import PerfilEliminar from '../componentes/perfil-eliminar';
import { eliminarPublicacion } from './../../../lib/data/perfil-data';
import { Redirect } from 'react-router-dom';

class PerfilEliminarContenedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            redirect,
        } = this.state;
        
        const {
            titulo,
            imagen,
        } = this.props;

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

}

export default PerfilEliminarContenedor;