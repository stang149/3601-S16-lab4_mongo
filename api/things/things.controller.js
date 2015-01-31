'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Thing = mongoose.model('Thing', {
    text: String
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    Thing.find(function (err, things) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(things); // return stuff!
        }
    });
};

exports.create = function(req, res) {
    Thing.create(req.body, function (err, thing) {
        if (err) {
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
};

exports.destroy = function(req, res) {
    Thing.findById(req.params.thing_id, function(err, thing){
      if(err) { res.send(err); return "error: " + err; }
      if(!thing) { return res.send(404); }

      thing.remove(function(err){
         if(err) { return "error: " + err}
         return res.send(204);
      });
    });
};