/*
    //node native server
    const http = require("http");
    const fs = require("fs");
    const port = process.env.port || 1337;

    http.createServer(function (request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        });
        const read = fs.createReadStream(__dirname + '/index.html');
        read.pipe(response);
    }).listen(port);
*/

/*
    //express server
    const http = require('http');
    const express = require('express');
    const path = require('path');

    const port = process.env.port || 1337;
    const app = express();

    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, '/index.html'));
    });

    app.listen(port);
*/

const server = require('./server/start');
const router = require('./server/router');
const requestHandler = require('./server/handler');

let handler = {};
handler["/"] = requestHandler.home;
handler["/show"] = requestHandler.show;
handler["/upload"] = requestHandler.upload;

server.start(router.route, handler);