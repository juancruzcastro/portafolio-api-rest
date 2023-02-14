'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// CARGAR ARCHIVOS RUTAS
var project_routes = require('./routes/project');

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false})); // configuracion necesaria para body parser.
app.use(bodyParser.json()); // cualquier tipo de peticion la va a convertir a json.

// CORS

// RUTAS
app.use('/api', project_routes);

// EXPORTAR
module.exports = app;