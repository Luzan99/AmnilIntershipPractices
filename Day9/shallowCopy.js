/* Shallow Copy stores the references of objects to the original memory address. 
Shallow Copy reflects changes made to the new/copied object in the original object.
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

//shallow copy
const shallowCopy = { ...person };

console.log("Before Modifying the shallowCopy object");
console.log("Perosn object output:");
console.log(person);

shallowCopy.firstName = "Bibek"; //changing top level property
shallowCopy.address.ward = 8; //nested property

console.log("After Modifying the shallowCopy object");
console.log("Perosn object output:");
console.log(person); //nested property is changed

console.log("Shallow Copy output:");
console.log(shallowCopy);
