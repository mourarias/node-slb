/*jslint
    node: true
*/
(function () {
    'use strict';

    var io = require('socket.io');
    
    function Realtime(port) {
        var realtime = io();
        
        realtime.upd = function () {
            realtime.emit('upd');
        };
        
        return realtime;
    }

    module.exports = Realtime;
}());