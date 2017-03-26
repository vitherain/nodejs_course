function Greetr() {
    this.greeting = 'Hello world from greeting 4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;