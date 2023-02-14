'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// CARGAR ARCHIVOS RUTAS

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false})); // configuracion necesaria para body parser.
app.use(bodyParser.json()); // cualquier tipo de peticion la va a convertir a json.

// CORS

// RUTAS
app.get('/', (req, res) => {
    res.status(200).send(
        'Página principal'
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Hola Mundo desde mi API de NodeJS'
    });
});

// EXPORTAR
module.exports = app;