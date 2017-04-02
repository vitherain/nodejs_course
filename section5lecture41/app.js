var Greetr = require('./greetr');

var greetr1 = new Greetr();

greetr1.on('greet', function(data) {
    console.log('Someone greeted! :', data);
});

greetr1.greet('Tony');