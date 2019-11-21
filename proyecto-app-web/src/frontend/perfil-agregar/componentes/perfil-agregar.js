import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tema from './../../tema/componentes/tema';
import Panel from './../../tema/componentes/panel';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
    },
    textField: {
        width: '100%',
    },
}));

const PerfilAgregar = (props) => {

    const {
        titulo,
        eventoCambiarTitulo,
        imagen,
        eventoCambiarImagen,
        eventoClickGuardar,
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
                        titulo='Añadiendo Anime'
                    >
                        <Grid
                            container
                            className={classes.container}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="Nombre del Anime"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={titulo}
                                    onChange={eventoCambiarTitulo}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField
                                    className={classes.textField}
                                    label="URL Wallpaper"
                                    margin="normal"
                                    variant="outlined"
                                    defaultValue={imagen}
                                    onChange={eventoCambiarImagen}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    onClick={eventoClickGuardar}
                                >
                                    Guardar Anime
                                </Button>
                            </Grid>
                        </Grid>
                    </Panel>
                </Grid>
            </Grid>
        </Tema>
    );

};

export default PerfilAgregar;