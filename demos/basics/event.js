const events = require('events');
const uitl = require('util');

/**
 * Inherits event handling from EventEmitter
 */
function SomeConstructor() {

}

uitl.inherits(SomeConstructor, events.EventEmitter);

SomeConstructor.prototype.someMethod = function () {
    this.emit('event');
};

const someInstance = new SomeConstructor();

someInstance.on('event', function () {
    console.log("event happened");
});

someInstance.someMethod();