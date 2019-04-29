console.log('hello TrackProgressController');
const express = require('express');
const TrackProgressModel = require('../models/TrackProgressModel');

const app = express.Router();

app.post("/RecordProgress", (req, res, next) => {
    
    TrackProgressModel.recordprogress(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/TrackProgress", (req, res, next) => {
    
    TrackProgressModel.trackprogress(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

app.post("/GetSharedActivities", (req, res, next) => {
    
    TrackProgressModel.getsharedactivities(req.body)
    .then(x=>  res.send(x) )
    .catch(next)
});

module.exports = app;
