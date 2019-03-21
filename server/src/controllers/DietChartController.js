console.log('hello diet chart controller')
const express = require('express');
const DietChartModel = require('../models/DietChartModel');

const app = express.Router();

app.get("/", (req,res) => {
    DietChartModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    DietChartModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    DietChartModel.showMealPlan(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = app;