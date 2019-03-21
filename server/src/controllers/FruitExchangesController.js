console.log('hello fruit exchanges controller')
const express = require('express');
const FruitExchangesModel = require('../models/FruitExchangesModel');

const app = express.Router();

app.get("/", (req,res) => {
    FruitExchangesModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    FruitExchangesModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;