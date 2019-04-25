console.log('hello friends controller')
const express = require('express');
const MyFriendsModel = require('../models/MyFriendsModel');
const jwt = require('jsonwebtoken');


const app = express.Router();

app.get("/", (req, res, next) => {
    MyFriendsModel.getAll()
    .then(x=>  res.send(x) )
    .catch(next)
});

app.get("/:id", (req, res, next) => {
    MyFriendsModel.get(req.params.id)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/", (req, res, next) => {
    MyFriendsModel.addfriends(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});


app.post("/AcceptFriendRequest", (req, res, next) => {
    MyFriendsModel.acceptfriendrequest(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/RejectFriendRequest", (req, res, next) => {
    MyFriendsModel.rejectfriendrequest(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetFriends", (req, res, next) => {
    MyFriendsModel.GetFriends(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/PendingRequests", (req, res, next) => {
    MyFriendsModel.pendingrequests(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/SearchFriend", (req, res, next) => {
    MyFriendsModel.searchfriend(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});




module.exports = app;