import React, { Component } from 'react';
import Perfil from '../componentes/perfil';
import { obtenerPublicaciones } from './../../../lib/data/perfil-data';
import {
    onAuthChanged,
    signout,
} from './../../../lib/data/user-data';
import {
    Redirect,
} from 'react-router-dom';

class PerfilContenedor extends Component {

    constructor(props) {
        super(props);

        const datos = [
            {
                imagen: require('./../../../assets/resources/imagenes/img1.jpg'),
                titulo: 'Imagen 1',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img2.jpg'),
                titulo: 'Imagen 2',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img3.jpg'),
                titulo: 'Imagen 3',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img4.jpg'),
                titulo: 'Imagen 4',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img5.jpg'),
                titulo: 'Imagen 5',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img6.jpg'),
                titulo: 'Imagen 6',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img7.jpg'),
                titulo: 'Imagen 7',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img8.jpg'),
                titulo: 'Imagen 8',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img9.jpg'),
                titulo: 'Imagen 9',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img10.jpg'),
                titulo: 'Imagen 10',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img11.jpg'),
                titulo: 'Imagen 11',
            },
            {
                imagen: require('./../../../assets/resources/imagenes/img12.jpg'),
                titulo: 'Imagen 12',
            },
        ];

        this.state = {
            datos: datos,
            estado: '',
        };
    }

    render() {

        const { datos } = this.state;

        const {
            estado,
            usuario,
        } = this.state;

        if(estado === 'no-autorizado') {
            return (
                <Redirect
                    to='/login'
                />
            );
        }

        return (
            <Perfil
                publicaciones={datos}
                usuario={usuario}
                cerrarSesion={this.cerrarSesion}
            />
        );

    }

    async componentDidMount() {
        const publicaciones = await obtenerPublicaciones();

        this.escucharAutenticacion();
        
        this.setState({
            datos: publicaciones,
        });
    }

    escucharAutenticacion = () => {
        onAuthChanged((usuario) => {
            if(!usuario) {
                this.setState({
                    estado: 'no-autorizado',
                });
            }
            else {
                this.setState({
                    usuario: usuario,
                });
            }
        });
    };

    cerrarSesion = () => {
        signout()
        .then(() => {
            console.log("Cerró la sesión");
        })
        .catch((error) => {
            console.log("Error al salir", error);
        });
    };

}

export default PerfilContenedor;