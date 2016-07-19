/*jslint
    node: true,nomen: true
*/
(function () {
    'use strict';

    var level = require('level');

    function DB(name) {
        var aux = {};
        aux.name = name;
        aux.db = level(name);
        
        aux.get = function (key, cb) {
            aux.db.get(key, cb);
        };
        
        aux.create = function (key, value, cb) {
            aux.db.get(key, function (err, _value) {
                if (err) {
                    aux.db.put(key, value, cb);
                } else {
                    return cb('Already exists', null);
                }
            });
        };

        aux.put = function (key, value, cb) {
            aux.db.put(key, value, cb);
        };
        
        aux.del = function (key, cb) {
            aux.db.del(key, cb);
        };
        
        aux.getAll = function (cb) {
            var elems = [];
            aux.db.createReadStream().on('data', function (data) {
                elems.push(data);
            }).on('end', function () {
                cb(elems);
            });
        };
        
        aux.delAll = function (cb) {
            aux.db.createKeyStream().on('data', function (data) {
                aux.db.del(data, function () {
                    console.log('deleted ' + data);
                });
            }).on('end', function () {
                console.log('Finished purge');
                cb();
            });
        };
        
        return aux;
    }
    
    module.exports = DB;
}());