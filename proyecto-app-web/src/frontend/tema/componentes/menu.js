import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        color: 'white',
        textDecoration: 'none',
    },
    espacioMenu: {
        height: '64px',
    },
}));

const Menu = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link
                            to='/'
                            className={classes.logo}
                        >
                            Tech Anime
                        </Link>
                    </Typography>
                    <Button
                        color="inherit"
                        component={ Link }
                        to='/agregar'
                    >
                        Añadir Anime
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.espacioMenu} />
        </>
    );
}

export default Menu;