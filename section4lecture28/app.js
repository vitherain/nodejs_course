var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
console.log(greeting);