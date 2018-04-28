const fs = require('fs');
const Console = require('console').Console;

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

const logger = new Console(output, errOutput);

var count = 5;
logger.log(`count:${count}`);