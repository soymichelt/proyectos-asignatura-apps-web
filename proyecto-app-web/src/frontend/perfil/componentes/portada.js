import React from 'react';

import ImagenPortada from './../../../assets/resources/portada.jpg';
import ImagenPerfil from './../../../assets/resources/perfil.jpg';
import FacebookIcon from './../../../assets/resources/redes/facebook.png';
import GithubIcon from './../../../assets/resources/redes/github.png';
import TwitterIcon from './../../../assets/resources/redes/twitter.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contenedorImagen: {
        position: 'relative',
        marginBottom: '60px',
    },
    portada: {
        width: '100%',
        height: '230px',
        objectFit: 'cover',
        borderRadius: '20px',
    },
    perfil: {
        position: 'absolute',
        width: '100px',
        height: '100px',
        left: 'calc(50% - 50px)',
        top: 'calc(100% - 50px)',
        borderRadius: '50%',
        border: '4px solid #fff',
    },
    nombre: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: 0,
    },
    descripcion: {
        textAlign: 'center',
        fontWeight: '100',
        fontSize: '18px',
        margin: 0,
    },
    contenedorDatos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datos: {
        marginLeft: '8px',
        marginRight: '8px',
    },
    linea: {
        height: '30px',
        width: '1px',
        backgroundColor: '#eceff1',
    },
    contenedorSocial: {
        display: 'flex',
        justifyContent: 'center',
    },
    social: {
        width: '32px',
        height: '32px',
        marginLeft: '2px',
        marginRight: '2px',
    },
}));

const Portada = (props) => {

    const classes = useStyles();

    return (
        <>
            <div
                className={classes.contenedorImagen}
            >
                <img
                    className={classes.portada}
                    src={ImagenPortada}
                />
                <img
                    className={classes.perfil}
                    src={ImagenPerfil}
                />
            </div>
            <div>
                <h1
                    className={classes.nombre}
                >
                    Traña Michael5
                </h1>
                <h2
                    className={classes.descripcion}
                >
                    Disfruto del <b>Anime</b> por la variada cultura que representa.
                    Mis favoritos son: Inuyasha, Chūnibiyōu Demo Koi ga Shitai y
                    Akashic Records of Bastard Magic Instructor.
                </h2>
                <div
                    className={classes.contenedorDatos}
                >
                    <p className={classes.datos}>
                        <b>27</b> publicaciones
                    </p>

                    <div className={classes.linea}></div>

                    <p className={classes.datos}>
                        <b>380</b> seguidores
                    </p>

                    <div className={classes.linea}></div>

                    <p className={classes.datos}>
                        <b>381</b> seguidos
                    </p>
                </div>
                <div
                    className={classes.contenedorSocial}
                >
                    <a href='https://www.facebook.com/mtraatabladaa94'>
                        <img
                            className={classes.social}
                            src={FacebookIcon}
                        />
                    </a>
                    <a href='https://github.com/soymichelt'>
                        <img
                            className={classes.social}
                            src={GithubIcon}
                        />
                    </a>
                    <a href='https://twitter.com/soymichelt'>
                        <img
                            className={classes.social}
                            src={TwitterIcon}
                        />
                    </a>
                </div>
            </div>
        </>
    );

};

export default Portada;