const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const PORT = 5000;

const estudiantes = [
    {nombre: 'Jeovanny'},
    {nombre: 'Esther'},
    {nombre: 'Marcos'},
    {nombre: 'Victor'},
    {nombre: 'Jordy'},
    {nombre: 'Selena' },
    {nombre: 'Graciela' },
    {nombre: 'Jasdany' },
    {nombre: 'Juan Manuel' },
];

app.get('/estudiantes', (req, res) => {

    res.send(estudiantes);

});

app.post('/estudiantes', (req, res) => {

    const nuevoEstudiante = req.param('nombre');

    estudiantes.push(nuevoEstudiante);

});

http.createServer(app).listen(PORT, () => {

    console.log(`API corriendo en http://localhost:${PORT}`);

});