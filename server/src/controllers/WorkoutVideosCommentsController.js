console.log('hello workout videos comments controller')
const express = require('express');
const WorkoutVideosCommentsModel = require('../models/WorkoutVideosCommentsModel');

const app = express.Router();

app.get("/", (req,res) => {
    WorkoutVideosCommentsModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    WorkoutVideosCommentsModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    WorkoutVideosCommentsModel.postComments(req.body, (err,data) => {
        if(err) throw err;
        //res.send(data);
        res.status(200).send({
            success: "Your comment has been posted!"
        });
    });
});

module.exports = app;