console.log('hello workout videos controller')
const express = require('express');
const WorkoutVideosModel = require('../models/WorkoutVideosModel');

const app = express.Router();

app.get("/", (req,res) => {
    WorkoutVideosModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    WorkoutVideosModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    WorkoutVideosModel.showVideoByWorkout(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;