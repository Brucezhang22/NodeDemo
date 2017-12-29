var express = require('express');

module.exports = {
    run: function () {
        var app = express();
        app.get('/', function (request, response) {
            response.send('Hello World, lala');
        });
        app.listen(3300);
        console.log('Server start on port 3300');
    }
}