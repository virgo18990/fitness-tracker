console.log('hello vegetable exchanges controller')
const express = require('express');
const VegetableExchangesModel = require('../models/VegetableExchangesModel');

const app = express.Router();

app.get("/", (req,res) => {
    VegetableExchangesModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    VegetableExchangesModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;