import React from 'react';
import Grid from '@material-ui/core/Grid';
import {

} from '@material-ui/core/styles'
import GaleriaImagen from './galeria-imagen';

const Galeria = (props) => {

    const { datos } = props;

    return (
        <section>
            <Grid
                container
                justify='center'
            >
                <Grid
                    xs={11}
                    sm={10}
                    md={8}
                >
                    <Grid
                        container
                        spacing={1}
                        className='galeria'
                    >
                        {
                            datos.map(dato => {
                                
                                return (
                                    <Grid
                                        item
                                        xs={4}
                                        justify='center'
                                    >
                                        <GaleriaImagen
                                            dato={dato}
                                        />
                                    </Grid>
                                );

                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );

};

export default Galeria;