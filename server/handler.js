const fs = require('fs');
const viewDir = "../views";

function home() {
    return fs.readFileSync(`${viewDir}/home.html`);
}

function show() {
    return fs.readFileSync(`${viewDir}/show.html`);
}

function upload() {
    return fs.readFileSync(`${viewDir}/upload.html`);
}

module.exports = {
    home: home,
    show: show,
    upload: upload
}