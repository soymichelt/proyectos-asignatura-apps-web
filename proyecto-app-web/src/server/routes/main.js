import React from 'react';
import {
    renderToString,
} from 'react-dom/server';
import render from '../render';
import Index from './../../frontend/perfil/contenedores/perfil-container';

const main = (req, res, next) => {
    try {
        const html = renderToString(
            <Index />
        );
        res.send(render(html));
    }
    catch(e) {
        next(e);
    }
};

export default main;