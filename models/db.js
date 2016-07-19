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
        
        aux['delete'] = function (key, cb) {
            aux.db.del(key, cb);
        };
        
        aux.getAll = function (cb) {
            var elems = [];
            aux.db.createReadStream().on('data', function (data) {
                elems.push({
                    name: data.key,
                    score: data.value
                });
            }).on('end', function () {
                cb(elems);
            });
        };
        
        return aux;
    }
    
    module.exports = DB;
}());