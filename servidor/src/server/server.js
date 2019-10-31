const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const PORT = 3030;

app.use('/static', express.static(path.resolve(`${__dirname}/../assets/`)));

app.get('/', (req, res) => {
    res.status(200).send(`
        <!doctype>
        <html>
            <head>
                <title>Mi primer servidor con ExpressJS</title>
                <link rel="stylesheet" href="/static/styles/theme.css" />
            </head>
            <body>
                <h1>Mi primer servidor</h1>
                <img
                    src="/static/imagen.png"
                />
                <h2>
                    con ExpressJS
                </h2>
            </body>
        </html>
    `);
});

http.createServer(app).listen(PORT, () => {
    console.log(path.resolve(`${__dirname}/../assets/`));
    console.log(`Servidor iniciado http:\\localhost:${PORT}`);
});