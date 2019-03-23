console.log('hello workouts beginner controller')
const express = require('express');
const WorkoutsBeginnerModel = require('../models/WorkoutsBeginnerModel');

const app = express.Router();

app.get("/", (req,res) => {
    WorkoutsBeginnerModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    WorkoutsBeginnerModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;