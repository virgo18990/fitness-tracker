console.log('hello workouts intermediate controller')
const express = require('express');
const WorkoutsIntermediateModel = require('../models/WorkoutsIntermediateModel');

const app = express.Router();

app.get("/", (req,res) => {
    WorkoutsIntermediateModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    WorkoutsIntermediateModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;