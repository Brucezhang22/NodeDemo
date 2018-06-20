/**
 * 1. Create an HTTP server and listen for requests
 * 2. When a request arrives, parse the request URL to determine the      location for the file
 * 3. Check to make sure the filre exists
 * 4. If the file doesn't exist, respond accordingly
 * 5. If the file does exist, open the file for reading
 * 6. Prepare a response header
 * 7. Write the file to the response
 * 8. Waiting for the next request
 */

const http = require('http');
const fs = require('fs');
const base = '/home/examples/public_html';

http.createServer(function (req, res) {
    const pathname = base + req.url;
    console.log(pathname);
}).listen(8899);

console.log('Server web running at 8899');