/*jslint
    node: true, nomen: true
*/
(function () {
    'use strict';
    
    var express = require('express'),
        morgan = require('morgan'),
        path = require('path'),
        bodyParser = require('body-parser'),
        app = express(),
        public_path = path.resolve(__dirname, 'public'),
        api = require('./routes/api'),
        pages = require('./routes/pages');
    
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, 'views'));
    
    app.use(morgan('short'));
    app.use('/', pages);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/', api);
    app.use(express['static'](public_path));
    app.use(function (req, res) {
        res.render('error', {
            errorCode: 404
        });
    });
    
    app.listen(3000, function () {
        console.log('slb running @ http://localhost:3000');
    });
}());