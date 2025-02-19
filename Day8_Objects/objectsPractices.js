/* An object literal is a list of name:value pairs inside curly braces {} 
also called as key:value pairs. 
this example cover ups overall about objects
*/

//creating an object

const person = {
  firstName: "Luzan",
  age: 20,
  isStudent: true,
  isMarried: false,
  email: "luzanmaharjan@gmail.com",
  //nested object
  address: {
    ward: 5,
    place: "panga",
  },
  hobbies: ["reading", "gaming", "coding"],

  //method inside object
  welcome: function () {
    return `Welcome to ${this.firstName}'s ${this.address.place} city.`;
  },
};

//accessing property of object
console.log(person); //accessing all property
console.log(`First name : ${person.firstName}`); //accessing using DOT(.)
console.log(`Student : ${person.isStudent}`);
console.log(`Age : ${person["age"]}`); //accessing using Bracket []
console.log(`Ward : ${person.address.ward}`); //accessing nested object
console.log(`Hobby : ${person.hobbies[1]}`);

//calling function inside of object
console.log(person.welcome());

//adding new property in object
person.lastName = "Maharjan";
console.log(person); //checking if added or not
console.log(`Last name : ${person.lastName}`);

//modifying the property
person.email = "luzan@gmail.com";
console.log(`Updated eamil : ${person.email}`);

//deleting a property
delete person.isMarried;
console.log(`Maratial Status : ${person.isMarried}`);

//checking property if it exists or not
console.log("Does email exist:", "email" in person);
console.log("Does phonenumber exist:", "phoneNumber" in person);

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

console.log(Object.keys(person)); //keys from objects
console.log(Object.values(person)); //values from objects
console.log(Object.entries(person)); //all

//copying an object using spread operator
const personCopy = { ...person };
console.log(personCopy);

//Copying an object using Object.assign()
const anotherPerson = Object.assign({}, person);
console.log(anotherPerson);

//merging two object
const additionalInfo = { profession: "Student", country: "Nepal" };
const updatedPerson = { ...person, ...additionalInfo };
console.log(updatedPerson);

//modifying nested objects
person.address.ward = 8;
console.log(person.address);
