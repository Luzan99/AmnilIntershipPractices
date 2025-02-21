/* The spread operator (…arr) in JavaScript is used to expand 
an array or object into individual elements. */

//Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; //creates a new array by copying
arr2.push(4); //push 4 into aar2

console.log("Original array:");
console.log(arr1);

console.log("Copied array");
console.log(arr2);

//merging array
const arr3 = [...arr1, ...arr2];

console.log("Merged array");
console.log(arr3);

//Merging Objects
const person1 = {
  firstName: "Luzan",
  age: 20,
  //nested object
  address: {
    place: "panga",
    ward: 5,
  },
};

const person2 = {
  lastName: "Maharjan",
  age: 30,
  //nested object
  address: {
    city: "panga",
    tole: 5,
  },
};

const peron3 = { ...person1, ...person2 }; //second persons values are overwritten in peron1
console.log("After merging two objetcs");
console.log(peron3);

//functions
const numbers = [3, 5, 7];

const sum = (a, b, c) => a + b + c;
console.log("Sum of a ,b and c is");
console.log(sum(...numbers));
