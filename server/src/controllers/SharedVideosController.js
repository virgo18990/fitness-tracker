console.log('hello shared videos controller')
const express = require('express');
const SharedVideosModel = require('../models/SharedVideosModel');

const app = express.Router();

app.get("/", (req,res) => {
    SharedVideosModel.getAll((err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:Id", (req,res) => {

    SharedVideosModel.get(req.params.Id, (err,data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req,res) => {
    SharedVideosModel.share(req.body, (err,data) => {
        if(err) throw err;
        //res.send(data);
        res.status(200).send({
            success: "Your video has been shared!"
        });
    });
});

module.exports = app;