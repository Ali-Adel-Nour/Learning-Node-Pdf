const fs = require('fs'),
    async = require('async');
async.waterfall(
    [
        function readData(callback) {
            fs.readFile('./data/data1.txt', 'utf8', function (err, data) {
                callback(err, data);
            });
        },
        function modify(text, callback) {
            let adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
            callback(null, adjdata);
        },
        function writeData(text, callback) {
            fs.writeFile('./data/data1.txt', text, function (err) {
                callback(err, text);
            });
        },
    ],
    function (err, result) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(result);
        }
    }
);
