/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express'),
        bodyParser = require('body-parser'),
        api = express.Router(),
        DB = require('../models/db'),
        dbname = 'temp',
        db = DB(dbname),
        submit = require('./submit')(db),
        del = require('./delete')(db),
        list = require('./list')(db);

    api.use('/', submit);
    api.use('/', del);
    api.use('/', list);
    
    module.exports = api;
}());