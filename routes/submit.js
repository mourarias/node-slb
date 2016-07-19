/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express');
    
    function Submit(db, socket) {
        var aux = express.Router();
        
        aux.post('/submit', function (req, res) {
            var body = req.body,
                name = body.name,
                score = Number(body.score);
            
            if (!name || isNaN(score) || Object.keys(body).length !== 2) {
                return res.status(400).render('error', {
                    errorCode: 400
                });
            }
            
            db.create(name, score, function (err) {
                if (err) {
                    return res.status(500).render('error', {
                        errorCode: 500
                    });
                }
                res.redirect('/');
            });
        });
        
        return aux;
    }
    
    module.exports = Submit;
}());