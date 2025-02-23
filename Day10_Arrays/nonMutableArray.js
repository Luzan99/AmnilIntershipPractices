/* An immutable value is one whose content cannot be changed without creating an entirely new value*/

//creating an array
let arr = [1, 2, 3, 4, 5];

//map (Transforms each element and returns a new array.)
let squareNum = arr.map((n) => n * n);
console.log("Initial array:");
console.log(arr);
console.log(" ");
console.log("Squared array (New array):");
console.log(squareNum);
console.log(" ");

//filter (Returns a new array with elements that satisfy a condition.)
let evenNum = arr.filter((n) => n % 2 === 0);
console.log("Initial array:");
console.log(arr);
console.log(" ");
console.log("Even number array (New array):");
console.log(evenNum);
console.log(" ");

//reduce (Reduces array to a single value)
let sumNum = arr.reduce((acc, n) => acc + n, 0);
console.log("Initial array:");
console.log(arr);
console.log(" ");
console.log("Sum of array:");
console.log(sumNum);
console.log(" ");

//concat (Merges two or more arrays.)
let concatedArray = arr.concat([6, 7, 8]);
console.log("Initial array:");
console.log(arr);
console.log(" ");
console.log("Concated Array (New Array):");
console.log(concatedArray);
console.log(" ");

//slice (Extracts a section of the array as a new array.)
let slicedNum = arr.slice(1, 4);
console.log("Initial array:");
console.log(arr);
console.log(" ");
console.log("Sliced Array (New Array):");
console.log(slicedNum);
console.log(" ");

/* non mutating arrays with object*/

//create an array with object
let users = [
  { id: 1, name: "Luzan", age: 20 },
  { id: 2, name: "Bibek", age: 30 },
  { id: 3, name: "Ram", age: 28 },
];

//map
let names = users.map((user) => user.name);
console.log("Initial array:");
console.log(users);
console.log("New array displaying names only:");
console.log(names);
console.log("");

//filter
let olderUsers = users.filter((user) => user.age > 27);
console.log("Initial array:");
console.log(users);
console.log("New array displaying age greater then 27:");
console.log(olderUsers);
console.log("");

//reduce
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Initial array:");
console.log(users);
console.log("New array displaying total age of all:");
console.log(totalAge);
console.log("");
