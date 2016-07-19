/*jslint
    node: true
*/
(function () {
    'use strict';

    function API(realtime) {
        var express = require('express'),
            bodyParser = require('body-parser'),
            api = express.Router(),
            DB = require('../models/db'),
            dbname = 'temp',
            db = DB(dbname),
            submit = require('./submit')(db, realtime),
            del = require('./delete')(db, realtime),
            upd = require('./update')(db, realtime),
            list = require('./list')(db);

        api.use('/', submit);
        api.use('/', del);
        api.use('/', upd);
        api.use('/', list);
        return api;
    }
    
    module.exports = API;
}());