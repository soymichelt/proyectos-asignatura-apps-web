import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './frontend/inicio/contenedores/inicio-container';
import EstudiantesContenedor from './frontend/estudiantes/contenedores/estudiantes-contenedor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EstudiantesContenedor />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
