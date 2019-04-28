console.log('hello diet chart controller')
const express = require('express');
const DietChartModel = require('../models/DietChartModel');

const app = express.Router();

app.get("/", (req, res, next) => {
    
    DietChartModel.getAll(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.get("/:Id", (req, res, next) => {
    
    DietChartModel.get(req.params.Id)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetDays", (req, res, next) => {
    console.log('Inside post');
    DietChartModel.getDays(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/ShowMealPlan", (req, res, next) => {
    
    DietChartModel.showMealPlan(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;