var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
    response.send('Hello World');
});

app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});