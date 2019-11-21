import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 2),
        color: '#263238',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 'bold',
        borderLeft: '2px solid #e91e63',
        marginLeft: '10px',
    },
    paper: {
        paddingTop: 20,
    },
}));

const Panel = (props) => {

    const classes = useStyles();

    const { 
        children,
        titulo,
    } = props;

    return(
        <Paper className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
                {titulo}
            </Typography>
            {children}
        </Paper>
    );

};

export default Panel;