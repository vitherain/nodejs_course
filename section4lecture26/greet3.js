function Greetr() {
    this.greeting = 'Hello world from greeting 3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();