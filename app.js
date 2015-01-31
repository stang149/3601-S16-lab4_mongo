
//TODO: clean up comments!
//TODO: fix bodyparser stuff!


//==== Require Things! ==========================================

// Misc Stuff
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

// Get config data for mongoDB.
var mongoConfig = require('./config/mongo.js');

//==== Use things! ==========================================================

// Including body-parser. See readme for info.
app.use(bodyParser());

// make the "public" directory available to the client
app.use(express.static('client'));

//==== Connect to the Database ===============================================

// Connect to Mongo server (hosted)
mongoose.connect(mongoConfig.mongo.host, mongoConfig.mongo.db, mongoConfig.mongo.port, mongoConfig.mongo.options);

// Connect to local database
//mongoose.connect('mongodb://127.0.0.1/27017');

//==== Misc ===================================================================

// define options that Express will use when sending files to the client (using res.sendFile)
var options = {
    root: "client/",
    dotfiles: 'deny'
};


//===== Defining Routes ========================================================

// API Routes
app.use('/api/things', require('./api/things'));

// Non-API routes
app.get('/*', function(req, res){
    res.sendFile('index.html', options);
});

// Wildcard catches requests for non-existent routes or files and responds with a 404 message (or an html page if you want to make a custom one!)
app.get('*', function(req, res){
    //res.send("404");
    res.sendFile('views/404/404.html', options);
});

//==== Starting the server =====================================================

// Starts the nodejs server on port 9000
var server = app.listen(9000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("server listening on http://%s:%s", host, port);
});



