import React from 'react';
import {
    renderToString,
} from 'react-dom/server';
import render from '../render';
import Perfil from './../../frontend/perfil/contenedores/perfil-container';
import { ServerStyleSheets } from '@material-ui/core/styles';

const main = (req, res, next) => {
    try {
        const sheets = new ServerStyleSheets();
        
        const html = renderToString(
            sheets.collect(
                <Perfil />
            )
        );

        const cssString = sheets.toString();

        res.send(render(html, cssString));
    }
    catch(e) {
        next(e);
    }
};

export default main;