import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';

it('Prueba funcional de renderizado de menú', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
});