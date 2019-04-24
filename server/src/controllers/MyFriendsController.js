console.log('hello friends controller')
const express = require('express');
const MyFriendsModel = require('../models/MyFriendsModel');
const jwt = require('jsonwebtoken');


const app = express.Router();

app.get("/", (req,res) => {
    MyFriendsModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {
    console.log({query: req.query})
    console.log({params: req.params})
    MyFriendsModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    MyFriendsModel.addfriends(req.body, (err,data) => {
        //if(err) throw err;  
        if(err){
            res.status(400).send({
                error: 'Request could not be sent. Try Again!'
            })
        }      
        res.send(data);
    });

});

app.post("/AcceptFriendRequest", (req,res) => {
    MyFriendsModel.acceptfriendrequest(req.body, (err,data) => {
        //if(err) throw err;  
        if(err){
            res.status(400).send({
                error: 'Could not accept request. Try Again!'
            })
        }      
        res.send(data);
    });

});



app.post("/GetFriends", (req, res, next) => {
    console.log({body: req.body});
    MyFriendsModel.GetFriends(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});



module.exports = app;