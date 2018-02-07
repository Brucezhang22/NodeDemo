const http = require('http');
const url = require('url');

function start(route, handler) {
    console.log("Starting.");

    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        let content = route(pathname, handler);
        if (content) {
            response.writeHead(200, {
                "Content-Type": "text/plain"
            });
            response.write(content);
            response.end();
        } else {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not found");
            response.end();
        }
    }

    const port = process.env.port || 1337;
    http.createServer(onRequest).listen(port);
    console.log("Server started.");
}

module.exports = {
    start: start
}