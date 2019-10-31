const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const PORT = 4040;

app.use('/assets', express.static(path.resolve(`${__dirname}/../assets/`)));

app.get('/', (req, res) => {

    res.status(200).send(
        `
            <!doctype>
            <html>
                <head>
                    <title>Mi primer servidor</title>
                    <link
                        rel="stylesheet"
                        href="/assets/styles/tema.css"
                    />
                </head>
                <body>
                    <header>
                        <nav style="display:block;width:100%;background-color:yellow">
                            <a
                                href="/"
                            >
                                Inicio
                            </a>
                            <a
                                href="/contacto"
                            >
                                Contacto
                            </a>
                        </nav>
                    </header>
                    <section style="display: flex;">
                        <aside style="flex: 1; background-color: pink;">
                            Sección lateral
                        </aside>
                        <section style="flex: 3; background-color: red;">
                            <img
                                src="/assets/imagenes/portada.jpg"
                            />
                        </section>
                    </section>
                    <footer>
                        Pie de página
                    </footer>
                </body>
            </html>
        `
    );

});

app.get('/contacto', (req, res) => {

    res.status(200).send('Contáctenos');

});

http.createServer(app).listen(PORT, () => {

    console.log(`Servidor en línea en http://localhost:${PORT}`);

});