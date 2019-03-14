console.log('hello profile controller')
const express = require('express');
const ProfileModel = require('../models/ProfileModel');

const app = express.Router();

app.get("/", (req,res) => {
    ProfileModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    ProfileModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    ProfileModel.add(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = app;