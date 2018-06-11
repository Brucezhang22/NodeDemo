var http = require('http');
var queryString = require('querystring');
var port = 8899;

var server = http.createServer().listen(port);

server.on('request', function (request, response) {
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            console.log(data);
            body += data;
        });

        request.on('end', function () {
            var post = queryString.parse(body);
            console.log(post);
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('request end!');
        });
    }
});

console.log(`server listening on ${port}`);