console.log('hello user controller')
const express = require('express');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


const app = express.Router();

app.get("/", (req, res, next) => {
    UserModel.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});


app.get("/:id", (req, res, next) => {
    UserModel.get(req.params.id)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/Register", (req, res, next) => {
    UserModel.add(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


app.post("/ChangePassword", (req, res, next) => {
    UserModel.changePassword(req.body.email, req.body.newPassword)
    .then(x=>  res.send(x) )
    .catch(next)
});


app.post("/Login", (req, res, next) => {
    UserModel.login(req.body.email, req.body.password)
    .then(x=>  res.send(x) )
    .catch(next)
});


app.post("/EditUserDetails", (req, res, next) => {
    UserModel.editUserDetails(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

module.exports = app;