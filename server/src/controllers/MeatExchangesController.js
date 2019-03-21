console.log('hello meat exchanges controller')
const express = require('express');
const MeatExchangesModel = require('../models/MeatExchangesModel');

const app = express.Router();

app.get("/", (req,res) => {
    MeatExchangesModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    MeatExchangesModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    MeatExchangesModel.showMeatExchanges(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = app;