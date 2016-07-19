/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express');

    function DeleteAll(db, realtime) {
        var del = express.Router();

        del.post('/deleteAll', function (req, res) {
            var body = req.body;
            
            if (Object.keys(body).length) {
                res.status(400).render('error', {
                    errorCode: 400
                });
            }
            db.delAll(function (err) {
                if (err) {
                    return res.status(500).render('error', {
                        errorCode: 500
                    });
                }
                realtime.upd();
                res.redirect('/');
            });
        });

        return del;
    }

    module.exports = DeleteAll;
}());