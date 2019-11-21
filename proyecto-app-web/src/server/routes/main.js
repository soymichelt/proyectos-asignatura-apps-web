import React from 'react';
import {
    renderToString,
} from 'react-dom/server';
import render from '../render';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from './../../frontend/routes/server-routes';
import { renderRoutes } from 'react-router-config';
import Perfil from './../../frontend/perfil/contenedores/perfil-container';
import { ServerStyleSheets } from '@material-ui/core/styles';

const main = (req, res, next) => {
    try {
        const sheets = new ServerStyleSheets();

        const context = {};
        
        const html = renderToString(
            sheets.collect(
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    {renderRoutes(serverRoutes)}
                </StaticRouter>
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