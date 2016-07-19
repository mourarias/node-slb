/*jslint
    node: true, nomen: true
*/
(function () {
    'use strict';
    
    var express = require('express'),
        morgan = require('morgan'),
        path = require('path'),
        app = express(),
        public_path = path.resolve(__dirname, 'public'),
        api = require('./routes/api');
    
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, 'views'));
    
    app.use(morgan('short'));
    app.use('/', api);
    app.use(express['static'](public_path));
    
    app.listen(3000, function () {
        console.log('slb running @ http://localhost:3000');
    });
}());