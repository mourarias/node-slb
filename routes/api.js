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
        db = new DB(dbname);

    function sendError(res, code) {
        res.status(code).render('error', {
            'errorCode': code
        });
    }
    
    api.use(bodyParser.urlencoded({ extended: false }));
    
    api.get('/submit', function (req, res) {
        res.render('submit');
    });

    api.get('/delete', function (req, res) {
        res.render('delete');
    });

    api.get('/element', function (req, res) {
        var body = req.body,
            name = body.name;
    
        if (!name || Object.keys(body).length !== 1) {
            return sendError(res, 400);
        }
        db.get(name, function (err, value) {
            if (err) {
                return sendError(res, 500);
            }
            res.json({
                'score': value
            });
        });
    });

    api.post('/element', function (req, res) {
        var body = req.body,
            name = body.name,
            score = body.score;
        if (!name || !score || Object.keys(body).length !== 2) {
            return sendError(res, 400);
        }
        db.create(name, score, function (err) {
            if (err) {
                return sendError(res, 500);
            }
            res.redirect('/');
        });
    });

    api.put('/element', function (req, res) {
        var body = req.body,
            name = body.name,
            score = body.key;
        if (!name || !score || Object.keys(body).length !== 2) {
            return sendError(res, 400);
        }
        db.put(name, score, function (err) {
            if (err) {
                return sendError(res, 400);
            }
            res.redirect('/');
        });
    });

    api.post('/element-del', function (req, res) {
        var body = req.body,
            name = body.name;
        console.log(name);
        if (!name || Object.keys(body).length !== 1) {
            return sendError(res, 400);
        }
        db['delete'](name, function (err) {
            if (err) {
                return sendError(res, 500);
            }
            res.redirect('/');
        });
    });
    
    api.get('/', function (req, res) {
        db.getAll(function (elems) {
            res.render('index', {
                elems: elems.sort(function (a, b) {
                    return b.score - a.score;
                })
            });
        });
    });
    
    module.exports = api;
}());