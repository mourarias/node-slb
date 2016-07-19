/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express');

    function List(db) {
        var list = express.Router();
    
        list.get('/list', function (req, res) {
            var body = req.body;

            if (Object.keys(body).length) {
                res.status(400).render('error', {
                    errorCode: 400
                });
            }

            db.getAll(function (list) {
                res.json(list.map(function (e) {
                    return {
                        'name': e.key,
                        'score': e.value
                    };
                }).sort(function (a, b) {
                    return b.score - a.score;
                }));
            });
        });
        
        return list;
    }

    module.exports = List;
}());