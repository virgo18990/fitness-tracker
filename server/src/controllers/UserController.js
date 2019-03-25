console.log('hello user controller')
const express = require('express');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


const app = express.Router();

app.get("/", (req,res) => {
    UserModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {
    console.log({query: req.query})
    console.log({params: req.params})
    UserModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/Register", (req,res) => {
    
    UserModel.add(req.body, (err,data) => {
        if(err){
            res.status(400).send({
                error: 'User Id already exists! Choose another Id.'
            })
        }      
        res.send(data);
    });

});

app.post("/ChangePassword", (req,res) => {
    
    UserModel.changePassword(req.body, (err,data) => {
        if(err){
            res.status(400).send({
                error: 'Error changing the password.Try Again!'
            })
        }      
        res.send(data);
    });

});

app.post("/Login", (req,res) => {
    UserModel.login(req.body, (err,data) => {
        if(err){
            res.status(400).send({
                error: 'Either Id or Password is incorrect!'
            })
        }
        res.send(data);
    });
});



app.post("/EditUserDetails", (req,res) => {
    UserModel.editUserDetails(req.body, (err,data) => {
        if(err){
            res.status(400).send({
                error: 'Could not edit user profile. Try Again!'
            })
        }
        res.send(data);
    });
});



module.exports = app;