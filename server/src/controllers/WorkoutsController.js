console.log('hello workouts controller')
const express = require('express');
const WorkoutsModel = require('../models/WorkoutsModel');

const app = express.Router();

app.post("/GetWorkoutType", (req, res, next) => {
    
    WorkoutsModel.getworkouttype(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetWorkoutSubType", (req, res, next) => {
    
    WorkoutsModel.getworkoutsubtype(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetWorkoutName", (req, res, next) => {
    
    WorkoutsModel.getworkoutname(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetSetsReps", (req, res, next) => {
    
    WorkoutsModel.getsetsreps(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;