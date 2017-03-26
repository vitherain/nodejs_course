/*function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var john = new Person('John', 'Doe');
var melissa = new Person('Melissa', 'Manning');

Person.prototype.greet = function() {
    console.log('Hello', this.firstName, this.lastName);
}

john.greet();
melissa.greet();

console.log(john.__proto__);
console.log(john.__proto__ === melissa.__proto__);*/

var firstName = 'Jane';

(function (lastName) {
    var firstName = 'John';
    console.log(firstName, lastName);
})('Doe');

console.log(firstName);