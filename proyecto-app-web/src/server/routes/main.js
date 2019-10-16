import React from 'react';
import {
    renderToString,
} from 'react-dom/server';
import render from '../render';
import Home from './../../frontend/inicio/index';

const main = (req, res, next) => {
    try {
        const html = renderToString(
            <Home />
        );
        res.send(render(html));
    }
    catch(e) {
        next(e);
    }
};

export default main;