console.log('hello login controller')
const express = require('express');
const LoginModel = require('../models/LoginModel');

const app = express.Router();

/*app.get("/", (req,res) => {
    LoginModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});*/

app.get("/:Id", (req,res) => {

    LoginModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

/*app.post("/", (req,res) => {
    LoginModel.add(req.body, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});*/

module.exports = app;