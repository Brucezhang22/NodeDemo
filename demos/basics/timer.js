// const timer1 = setTimeout((name) => {
//     console.log('Hello' + name);
// }, 30000, 'Shelly');

// console.log('waiting on timer...');

// setTimeout((timer) => {
//     clearTimeout(timer);
//     console.log('cleared timer');
// }, 3000, timer1);


// const interval = setInterval(function (name) {
//     console.log('Hello' + name);
// }, 3000, 'Shelley');

// setTimeout(function (interval) {
//     clearInterval(interval);
//     console.log('cleared timer');
// }, 30000, interval);

// console.log('waiting for the first interval');


/**
 * Use of unref
 */
// const timer = setTimeout(function (name) {
//     console.log('Hello' + name);
// }, 3000, 'Shelley');

// timer.unref();
// console.log("waiting on timer...");


/**
 * Another example of unref
 */
var interval = setInterval(function (name) {
    console.log('Hello' + name);
}, 3000, 'Shelley');

var timer = setTimeout(function (interval) {
    clearInterval(interval);
    console.log('cleared timer');
}, 30000, interval);

timer.unref();

console.log('waiting on first interval...');