import React from 'react';

import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';

import PublicarIcon from '@material-ui/icons/ReplyRounded';
import BuscarIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles(theme => ({
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#263238',
        paddingTop: '8px',
        paddingBottom: '8px',
    },
    titulo: {
        flexGrow: 1,
        margin: 0,
    },
    botones: {
        marginRight: '4px',
    },
}));

const Publicar = (props) => {

    const classes = useStyles();

    return (
        <div
            className={classes.contenedor}
        >
            <h1
                className={classes.titulo}
            >
                Publicaciones
            </h1>
            <Fab
                color="secondary"
                variant="extended"
                className={classes.botones}
            >
                <PublicarIcon  />
                Publicar
            </Fab>
            <Fab
                color="secondary"
                className={classes.botones}
            >
                <BuscarIcon />
            </Fab>
        </div>
    );

};

export default Publicar;