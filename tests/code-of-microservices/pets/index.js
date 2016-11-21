'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    baucis = require('baucis'),
    config = require('./config');

mongoose.connect(config.db.mongoUrl);

var petsSchema = require('./schema/pet.json');

var Pets = new mongoose.Schema(petsSchema);
// Register new models with mongoose.
mongoose.model('pets', Pets);
// Create a simple controller.  By default these HTTP methods
// are activated: HEAD, GET, POST, PUT, DELETE
baucis.rest('pets');
// Create the app and listen for API requests
var app = express();
//add cors support
app.use(cors());
app.use('/api', baucis());

var port = config.port;

app.listen(port, () => {
    console.log("Your API is running on (http://localhost:%d)", port);
});