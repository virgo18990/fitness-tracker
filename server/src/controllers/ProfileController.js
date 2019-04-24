console.log('hello profile controller')
const express = require('express');
const ProfileModel = require('../models/ProfileModel');

const app = express.Router();

app.get("/", (req, res, next) => {
    ProfileModel.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

app.get("/:Id", (req, res, next) => {   
    ProfileModel.get(req.params.Id)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/", (req, res, next) => {
    
    ProfileModel.add(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


module.exports = app;