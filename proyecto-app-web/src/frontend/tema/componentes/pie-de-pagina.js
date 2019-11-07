import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme) => ({
        pieDePagina: {
            fontWeight: '600',
            fontSize: '12px',
            textAlign: 'center',
            marginTop: '0px',
            marginBottom: '8px',
        },
    })
);

const PieDePagina = () => {

    const classes = useStyles();

    return (
        <footer>
            <p
                className={classes.pieDePagina}
            >
                © 2019 TECH ANIME
            </p>
        </footer>
    );

};

export default PieDePagina;