const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const PORT = 3031;

app.use(express.static(path.resolve(`${__dirname}/../../public`)));

app.get('/', (req, res) => {

    res.sendFile(path.resolve(`${__dirname}/../../public/index.html`));

});

http.createServer(app).listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});