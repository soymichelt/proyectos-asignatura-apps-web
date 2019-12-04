import EstudiantesApi from './estudiantes-api-contenedor';
import React from 'react';
import ReactDOM from 'react-dom';

it('Prueba del sistema para obtener datos de API', () => {

    const div = document.createElement('div');
    ReactDOM.render(<EstudiantesApi />, div);
    
});