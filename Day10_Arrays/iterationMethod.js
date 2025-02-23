/* this is used to iterate over the array to find the solution */

//creating an array
let fruits = ["apple", "banana", "cherry", "dragon", "berry"];

//foreach (print eaxh element)
console.log("Displaying every element:");
fruits.forEach((fruit) => console.log(fruit));
console.log("");

//for of (to print index and value)
console.log("Displaying every element with index and value:");
for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}
console.log("");

//keys (get all indices)
console.log("Displaying every elements keys:");
for (let key of fruits.keys()) {
  console.log(key);
}
console.log("");

//values (get all values)
console.log("Displaying every elements values:");
for (let value of fruits.values()) {
  console.log(value);
}
console.log("");

/* iterating arrays with object*/

//create an array with object
let users = [
  { id: 1, name: "Luzan", age: 20 },
  { id: 2, name: "Bibek", age: 30 },
  { id: 3, name: "Ram", age: 28 },
];

//foreach()
console.log("Displaying every elements name only :");
users.forEach((user) => console.log(user.name));
console.log("");

//key and values
console.log("Displaying every element with index and value:");
for (let [index, user] of users.entries()) {
  console.log(index, user.name);
}
console.log("");

//keys (get all indices)
console.log("Displaying every elements keys:");
for (let key of users.keys()) {
  console.log(key);
}
console.log("");

// values (get all values)
console.log("Displaying every elements values:");
for (let value of users.values()) {
  console.log(value);
}
console.log("");
