console.log('hello workouts advanced controller')
const express = require('express');
const WorkoutsAdvancedModel = require('../models/WorkoutsAdvancedModel');

const app = express.Router();

app.get("/", (req,res) => {
    WorkoutsAdvancedModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    WorkoutsAdvancedModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;