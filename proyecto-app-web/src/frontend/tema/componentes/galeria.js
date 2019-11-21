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
                    item
                    xs={11}
                    sm={10}
                    md={8}
                >
                    <Grid
                        container
                        justify='center'
                        spacing={1}
                        className='galeria'
                    >
                        {
                            datos.map(dato => {
                                
                                return (
                                    <Grid
                                        key={dato.titulo}
                                        item
                                        xs={4}
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