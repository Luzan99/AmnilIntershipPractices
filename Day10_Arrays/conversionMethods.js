/** */

//creating an array
let fruits = ["apple", "banana", "cherry", "dragon", "berry"];

// join (convert array to string)
let joined = fruits.join(" ");
console.log(joined);

// toString (convert array to string (comma-separated))
let str = fruits.toString();
console.log(str);

//create an array with object
let users = [
  { id: 1, name: "Luzan", age: 20 },
  { id: 2, name: "Bibek", age: 30 },
  { id: 3, name: "Ram", age: 28 },
];

//create another array with object
let newUsers = [
  { id: 6, name: "Frank", age: 40 },
  { id: 7, name: "Grace", age: 27 },
];

//spread operator
let allUsers = [...users, ...newUsers];
console.log("Combined array is:");
console.log(allUsers);
