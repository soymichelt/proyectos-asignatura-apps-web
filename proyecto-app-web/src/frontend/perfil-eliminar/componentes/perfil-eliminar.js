import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tema from './../../tema/componentes/tema';
import Panel from './../../tema/componentes/panel';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
    },
    image: {
        width: '100%',
    },
}));

const PerfilEliminar = (props) => {

    const {
        titulo,
        imagen,
        eventoClickEliminar,
    } = props;

    const classes = useStyles();

    return (
        <Tema>
            <Grid
                container
                justify='center'
            >
                <Grid
                    item
                    xs={11}
                    sm={10}
                    md={8}
                >
                    <Panel
                        titulo='Eliminando Anime'
                    >
                        <Grid
                            container
                            className={classes.container}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <p>
                                    <b>Nombre del Anime</b> 
                                    {titulo}
                                </p>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <img
                                    className={classes.image}
                                    src={imagen}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={eventoClickEliminar}
                                >
                                    Eliminar Anime
                                </Button>
                            </Grid>
                        </Grid>
                    </Panel>
                </Grid>
            </Grid>
        </Tema>
    );

};

export default PerfilEliminar;