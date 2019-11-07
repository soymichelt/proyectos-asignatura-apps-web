import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Imagen1 from './../../../assets/imagenes/img1.jpg';
import Imagen2 from './../../../assets/imagenes/img1.jpg';
import Imagen3 from './../../../assets/imagenes/img1.jpg';

const useStyles = makeStyles(theme => ({
    img: {
        width: '100%',
        height: '100px',
        objectFit: 'cover',
    },
}));

const Galeria = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                spacing={8}
                justify='center'
            >
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={3}
                >
                    <img
                        className={classes.img}
                        src={Imagen1}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={3}
                >
                    <img
                        className={classes.img}
                        src={Imagen2}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    md={3}
                >
                    <img
                        className={classes.img}
                        src={Imagen3}
                    />
                </Grid>
            </Grid>
        </div>
    );

};

export default Galeria;