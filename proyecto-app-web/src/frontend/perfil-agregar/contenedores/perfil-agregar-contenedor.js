import React, { Component } from 'react';
import PerfilAgregar from '../componentes/perfil-agregar';
import { guardarPublicacion } from './../../../lib/data/perfil-data';
import { Redirect } from 'react-router-dom';

class PerfilAgregarContenedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            imagen: '',
            redirect: '',
        };
    }

    eventoCambiarTitulo = (event) => {
        this.setState({
            titulo: event.target.value,
        });
    }

    eventoCambiarImagen = (event) => {
        this.setState({
            imagen: event.target.value,
        });
    }

    eventoClickGuardar = (event) => {
        const { titulo, imagen, } = this.state;
        guardarPublicacion({
            titulo,
            imagen,
        });
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
            <PerfilAgregar
                titulo={titulo}
                eventoCambiarTitulo={this.eventoCambiarTitulo}
                imagen={imagen}
                eventoCambiarImagen={this.eventoCambiarImagen}
                eventoClickGuardar={this.eventoClickGuardar}
            />
        );

    }

}

export default PerfilAgregarContenedor;