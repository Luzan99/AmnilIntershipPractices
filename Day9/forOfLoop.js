/* iterating over iterable objects like arrays, strings, Maps, Sets 
Returns values directly instead of keys.*/

//creating object
const person = {
  firstName: "Luzan",
  age: 20,
  //nested object
  address: {
    place: "panga",
  },
  hobbies: ["reading", "gaming", "coding"],

  //method inside object
  welcome: function () {
    return `Welcome to ${this.firstName}'s ${this.address.place} city.`;
  },
};

for (let persons of person) {
  //error as it cannot iterate over object
  console.log(persons);
}
//creating an array
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
