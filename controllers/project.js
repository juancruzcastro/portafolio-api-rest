'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la Home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el test del controlador de project'
        });
    },
    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message:'Error al guardar.'});

            if(!projectStored) return res.status(404).send({message: 'No se pudo guardar el projecto.'});

            return res.status(200).send({project: projectStored});
        });
    }
};

module.exports = controller;