/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var express = require('express'),
        pages = express.Router();
    
    pages.get('/', function (req, res) {
        res.render('index');
    });
    
    pages.get('/submit', function (req, res) {
        res.render('submit');
    });
    
    pages.get('/delete', function (req, res) {
        res.render('delete');
    });
    
    pages.get('/update', function (req, res) {
        res.render('update');
    });
    
    module.exports = pages;
}());