import React, { Component } from 'react';
import Perfil from '../componentes/perfil';
import { obtenerPublicaciones } from './../../../lib/data/perfil-data';

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
        };
    }

    render() {

        const { datos } = this.state;

        console.log(datos);

        return (
            <Perfil
                publicaciones={datos}
            />
        );

    }

    async componentDidMount() {
        const publicaciones = await obtenerPublicaciones();

        console.log("componentDidMount: Cargando datos de firestore");
        
        this.setState({
            datos: publicaciones,
        });
    }

}

export default PerfilContenedor;