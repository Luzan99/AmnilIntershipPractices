/* iterate over enumerable properties of an object
Returns keys (property names or indexes) as strings.
*/

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

//usig for in loop to iterates over key and return corresponding properties

for (let key in person) {
  console.log(key, ":", person[key]);
}
