
// require Express (used for routing and stuff)
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Including body-parser. See readme for info.
app.use(bodyParser.urlencoded({extended: false}));

// define options that Express will use when sending files to the client (using res.sendFile)
var options = {
    root: "client/",
    dotfiles: 'deny'
};

// make the "public" directory available to the client
app.use(express.static('client'));

//===== Defining Routes ========================================================

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



