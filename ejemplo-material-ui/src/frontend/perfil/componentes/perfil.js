import React from 'react';
import Tema from './../../tema/componentes/tema';
import Galeria from './../../tema/componentes/galeria';
import Publicar from './publicar';

import Portada from './portada';

import Grid from '@material-ui/core/Grid';

const Perfil = (props) => {

    const { publicaciones } = props;

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
                    <Portada />
                </Grid>
                <Grid
                    item
                    xs={11}
                    sm={10}
                    md={8}
                >
                    <Publicar />
                </Grid>
            </Grid>
            <Galeria
                datos={publicaciones}
            />
        </Tema>
    );

};

export default Perfil;