var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greetr1 = new Greetr();
greetr1.on('greet', function(data) {
    console.log('Someone greeted! :', data);
});

greetr1.greet('Tony');