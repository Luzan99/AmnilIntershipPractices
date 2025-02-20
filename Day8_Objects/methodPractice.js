/*Methods are functions that are stored as object properties. 
They allow objects to perform actions and manipulate data. */

//creating an object

const person = {
  firstName: "Luzan",
  age: "20",

  //creating method inside object
  call() {
    return `My name is ${this.firstName}. I am ${this.age} years old `;
  },

  //adding dynamic method
  setHeight(height) {
    this.height = height;
  },

  greet() {
    return `My name is ${this.firstName}.`;
  },
};

//accessing methods
console.log(person.call());
console.log(person.greet());

//adding height dynamically
person.setHeight(5);
console.log(`Height is ${person.height} inch`);

//built in method
console.log("To get keys from object");
console.log(Object.keys(person));

//method borrowing
const anotherPerson = { firstName: "Bibek" };
console.log(person.greet.call(anotherPerson));
