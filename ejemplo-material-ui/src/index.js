import React from 'react';
import ReactDOM from 'react-dom';
import Estudiantes from './frontend/estudiantes/contenedores/estudiantes-contenedor';
import Inicio from './frontend/inicio/contenedores/inicio-container';
import Perfil from './frontend/perfil/contenedores/perfil-container';
import Prueba from './frontend/inicio/componentes/pruebas';
import EstudiantesApi from './frontend/estudiantes/contenedores/estudiantes-api-contenedor';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<EstudiantesApi />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
