/*jslint
    node: true
*/
(function () {
    'use strict';

    var express = require('express');

    function Delete(db, socket) {
        var del = express.Router();

        del.post('/delete', function (req, res) {
            var body = req.body,
                name = body.name;
            if (!name || Object.keys(body).length !== 1) {
                res.status(400).render('error', {
                    errorCode: 400
                });
            }
            db.del(name, function (err) {
                if (err) {
                    return res.status(500).render('error', {
                        errorCode: 500
                    });
                }
                res.redirect('/');
            });
        });

        return del;
    }

    module.exports = Delete;
}());