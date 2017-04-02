function Person(first, last) {
    this.first = first;
    this.last = last;
}

console.log(Person.prototype);
var forrest = new Person('Forrest', 'Gump');
console.log(forrest.prototype);
console.log(forrest.__proto__);
console.log(forrest.__proto__ === Person.prototype);