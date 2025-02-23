/* search and check methods are commonly used for finding elements
in arrays, objects, or strings and verifying conditions */

//creating an array

let fruits = ["apple", "banana", "cherry", "dragon", "berry"];

//find (first elemnt that meets the condition)
let elementWithb = fruits.find((fruit) => fruit.startsWith("b"));
console.log("Element that starts with letter b:");
console.log(elementWithb);
console.log(" ");

//findIndex (find index of the first match)
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith("b"));
console.log("Index that starts with letter b:");
console.log(foundIndex);
console.log(" ");

//some (check if any element meets a condition)
let hasApple = fruits.some((fruit) => fruit === "apple");
console.log("Does array has apple?");
console.log(hasApple);
console.log(" ");

//every (check if all elements meet a condition)
let allStartWithA = fruits.every((fruit) => fruit.startsWith("a"));
console.log("Does all elements starts with a?");
console.log(allStartWithA);
console.log(" ");

//includes (check if array contains a value)
let containsCherry = fruits.includes("cherry");
let containsPineapple = fruits.includes("pineapple");
console.log("Does array contains cherry?");
console.log(containsCherry);
console.log(" ");
console.log("Does array contains pineapple?");
console.log(containsPineapple);
console.log(" ");

//indexof (get index of an element)
let index = fruits.indexOf("banana");
let index1 = fruits.indexOf("pineapple");
console.log("Index of Banana?");
console.log(index);
console.log(" ");
console.log("Index of Pineapple?");
console.log(index1); //output -1
console.log(" ");

/* search and check arrays with object*/

//create an array with object
let users = [
  { id: 1, name: "Luzan", age: 20 },
  { id: 2, name: "Bibek", age: 30 },
  { id: 3, name: "Ram", age: 28 },
];

//find
let foundUser = users.find((user) => user.id === 3);
console.log("Element that matches the condition:");
console.log(foundUser);
console.log(" ");

//finIndex
let userIndex = users.findIndex((user) => user.name === "Eve");
console.log("Index of the searched element:");
console.log(userIndex);
console.log(" ");
