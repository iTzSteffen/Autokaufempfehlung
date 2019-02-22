var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger funktion processed a request.');
    var _currentData = {};
    var res = {};
    var config = {
        userName = 'Steffen',
        password = 'f646bb91',
        server = 'cloud5svr, database.windows.net',
        options: {encrypt: true, database: 'cloud5db'}
    };
    var connection = new Connection(config);
    conncection.on('connect', function (err) {
        context.log("Connected");
        getPerformance();
    });
    function getPerformance() {
        request = new Request("SELECT 'Best'= MIN(FivekmTime), 'Average'= AVG(FivekmTime) FROM RunnerPerformance;", function(err) {
            if(err) {
                context.log('--> ERROR!!');
                context.res = {
                    status: 500,
                    body: "Error executing request: " + (err)
                };
                context.log(err);
                context.done();
            }
        });
        request.on('row', function (columns) {
            _currentData.Best = columns[0].value;
            _currentData.Average = columns[1].value;
            context.log(_currentData);
        });
        request.on('requestCompleted', function () {
            context.res = {
                status: 200,
                body: "The best time is: " + (_currentData.Best) + " and average is: " + (_currentData.Best)
            };
            context.done();
        });
        connection.execSql(request);
    };
};