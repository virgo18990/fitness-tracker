console.log('hello profile controller')
const express = require('express');
const UserModel = require('../models/ProfileModel');

const app = express.Router();

app.get("/", (req,res) => {
    UserModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    UserModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    UserModel.add(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;