/*jslint
    browser: true
*/
/*global
    io, $
*/
(function () {
    'use strict';

    $(function () {
        var socket = io();
        function upd() {
            $('#rank').find('tr').remove();
            $.get('list', function (data, status) {
                data.forEach(function (e, index) {
                    var tr = $('<tr></tr>'),
                        idx = $('<td></td>').text(index + 1),
                        name = $('<td></td>').text(e.name),
                        score = $('<td></td>').text(e.score);

                    tr.append(idx, name, score);
                    $('#rank').append(tr);
                });
            });
        }
        socket.on('upd', function () {
            upd();
        });
        
        $(window).on('beforeunload', function () {
            socket.close();
        });
        
        upd();
    });
}());