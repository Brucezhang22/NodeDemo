/**
 * allocate buffer
 */
let buf1 = new Buffer(24);
buf1.fill(0);

let buf2 = new Buffer(24);
buf2.fill("hello world", 3, 20, 'utf8');

let buf3 = Buffer.from([1, 2, 3]);

let buf4 = Buffer.from(new Uint8Array([10, 2, 3]));

let buf5 = Buffer.alloc(10);

let buf6 = Buffer.allocUnsafe(10);

// console.log(buf1);
// console.log(buf2);
// console.log(buf3);
// console.log(buf4);
// console.log(buf5);
// console.log(buf6);



/**
 * convert buffer to json
 */
let buf7 = new Buffer('This is my pretty example');
let json = JSON.stringify(buf7);

// console.log(json);

/**
 * convert string to json to buffer to string again
 */
let buf8 = new Buffer('This is my pretty example');
let json1 = JSON.stringify(buf8);
let buf9 = new Buffer(JSON.parse(json1).data);

// console.log(json1);
// console.log(buf8.toString('ascii'));
// console.log(buf9.toString());

/**
 * write to buffer
 */
let buf10 = new Buffer(4);
buf10.writeUInt8(0x63, 0);
buf10.writeUInt8(0x61, 1);
buf10.writeUInt8(0x74, 2);
buf10.writeUInt8(0x73, 3);

// console.log(buf10.toString());
// console.log(buf10.readUInt8(2));

/**
 * modify buffer
 */
let buf11 = new Buffer('this is the way we build our buffer');
var lnth = buf11.length;
let buf12 = buf11.slice(19, lnth);
// console.log(buf12.toString());
buf12.fill('*', 0, 5);
// console.log(buf12.toString());
// console.log(buf11.toString());

/**
 * copy buffer
 */
let buf13 = new Buffer('this is a new buffer with a string');
let buf14 = new Buffer(10);
buf13.copy(buf14);
// console.log(buf14.toString());

/**
 * compare buffers
 */
let buf15 = new Buffer('1 is number one');
let buf16 = new Buffer('2 is number two');
let buf17 = new Buffer(buf15.length);
buf15.copy(buf17);
console.log(buf15.compare(buf16));
console.log(buf16.compare(buf15));
console.log(buf15.compare(buf17));