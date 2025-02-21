/* Deep copy stores copies of the object’s value.
Deep copy stores the copy of the original object and recursively copies the objects as well.
*/

const person = {
  firstName: "Luzan",
  age: 20,
  //nested object
  address: {
    place: "panga",
    ward: 5,
  },
  hobbies: ["reading", "gaming", "coding"],

  //method inside object
  welcome: function () {
    return `Welcome to ${this.firstName}'s ${this.address.place} city.`;
  },
};

//deep copy
const deepCopy = JSON.parse(JSON.stringify(person));

console.log("Before Modifying the deepCopy object");
console.log("Perosn object output:");
console.log(person);

deepCopy.firstName = "Bibek"; //changing top level property
deepCopy.address.ward = 8; //nested property

console.log("After Modifying the deepCopy object");
console.log("Perosn object output:");
console.log(person); //properties are unchanged

console.log("deepCopy Copy output:");
console.log(deepCopy);
