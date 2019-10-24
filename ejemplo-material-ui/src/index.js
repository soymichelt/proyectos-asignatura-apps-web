import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './frontend/inicio/contenedores/inicio-container';
<<<<<<< HEAD
import Perfil from './frontend/perfil/contenedores/perfil-container';
import Prueba from './frontend/inicio/componentes/pruebas';
=======
import EstudiantesContenedor from './frontend/estudiantes/contenedores/estudiantes-contenedor';
>>>>>>> 02bb0ebef0bdb6782b7c7142916a5f6335c29cfd
import * as serviceWorker from './serviceWorker';
import './index.css';

<<<<<<< HEAD
ReactDOM.render(<Perfil />, document.getElementById('root'));
=======
ReactDOM.render(<EstudiantesContenedor />, document.getElementById('root'));
>>>>>>> 02bb0ebef0bdb6782b7c7142916a5f6335c29cfd

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
