/*jslint
    browser: true
*/
/*global
    io, $
*/
(function () {
    'use strict';

    $(function () {
        $.get('list', function (data, status) {
            data.forEach(function (e) {
                var tr = $('<tr></tr>'),
                    name = $('<td></td>').text(e.name),
                    score = $('<td></td>').text(e.score);
                
                tr.append(name, score);
                $('#rank').append(tr);
            });
        });
    });
}());