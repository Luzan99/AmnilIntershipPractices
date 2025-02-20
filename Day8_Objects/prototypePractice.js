/* prototypes are the foundation of object inheritance */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//adding method to prototype
Person.prototype.greet = function () {
  return `Hello everyone my name is ${this.name} and i am ${this.age} years old`;
};

Person.prototype.increaseAge = function (addAge) {
  this.age += addAge;
  return `New age of ${this.name} is ${this.age} years old.`;
};

const person1 = new Person("Luzan", 7);
console.log(person1.greet());
console.log(person1.increaseAge(10));

const person2 = new Person("Bibek", 20);
console.log(person2.greet());
