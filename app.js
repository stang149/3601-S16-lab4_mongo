
// require Express (used for routing and stuff)
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

// Including body-parser. See readme for info.
app.use(bodyParser());

// Specify options for mongoose to use when connecting to mongo server.
var mongoOptions = {
    user: "",
    pass: "",
    auth: {
        authdb: 'admin'
    }
};

// Connect to mongo server (hosted)
mongoose.connect('breadfish.aeniug2.net', 'coolData', 27017, mongoOptions);

// Connect to local database
//mongoose.connect('mongodb://127.0.0.1/27017');


// define options that Express will use when sending files to the client (using res.sendFile)
var options = {
    root: "client/",
    dotfiles: 'deny'
};

// make the "public" directory available to the client
app.use(express.static('client'));

//============= mongoooooose =================

var Thing = mongoose.model('Thing', {
    text: String
});

//===== Defining Routes ========================================================

app.get('/api/things', function(req, res){
   Thing.find(function(err, things) {
       if(err){
           console.log("Error getting data from database");
           res.send(err)
       }

       res.json(things); // return stuff!
   });
});

app.post('/api/things', function(req, res){
   Thing.create(req.body, function(err, thing){
       if(err){
           res.send(err);
       } else {
           Thing.find(function (err, things) {
               if (err) {
                   res.send(err);
               }

               res.json(things);
           });
       }
   });
});

app.delete('/api/things/:thing_id', function(req, res){
    Thing.remove({_id: req.params.thing_id}, function(err, thing){
        if (err) {
            res.send(err);
        } else {
            Thing.find(function(err, things) {
                if (err){
                    res.send(err)
                }

                res.json(things);
            });
        }
    });
});

app.get('/*', function(req, res){
    res.sendFile('index.html', options);
});

// Wildcard catches requests for non-existent routes or files and responds with a 404 message (or an html page if you want to make a custom one!)
app.get('*', function(req, res){
    //res.send("404");
    res.sendFile('views/404/404.html', options);
});



// Starts the nodejs server on port 9000
var server = app.listen(9000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("server listening on http://%s:%s", host, port);
});



