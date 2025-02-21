/* The Rest Parameter allows functions to accept an indefinite number of arguments as an array */

//Collecting function arguments
function sumAll(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of 4 numbers is ");
console.log(sumAll(1, 2, 3, 4));
console.log("Sum of 2 numbers is ");
console.log(sumAll(5, 10));

//Destructuring Arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("First element is");
console.log(first); //displays first element
console.log("Second element is");
console.log(second); //displays second element
console.log("Remaining element is");
console.log(rest); //displays rest of elements in an array

//Destructuring Objects
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

const { firstName, ...otherDetails } = person; //extracts firstname from object

console.log(firstName);

console.log(otherDetails);
