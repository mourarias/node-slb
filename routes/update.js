/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express');
    
    function Submit(db, realtime) {
        var aux = express.Router();
        
        aux.post('/update', function (req, res) {
            var body = req.body,
                name = body.name,
                score = Number(body.score);
            
            if (!name || isNaN(score) || Object.keys(body).length !== 2) {
                return res.status(400).render('error', {
                    errorCode: 400
                });
            }
            
            db.put(name, score, function (err) {
                if (err) {
                    return res.status(500).render('error', {
                        errorCode: 500
                    });
                }
                realtime.upd();
                res.redirect('/');
            });
        });
        
        return aux;
    }
    
    module.exports = Submit;
}());