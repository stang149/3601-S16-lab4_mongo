'use strict';

// Defining the "things" API module
// =======================================


var express = require('express');
var controller = require('./things.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:thing_id', controller.destroy);

module.exports = router;