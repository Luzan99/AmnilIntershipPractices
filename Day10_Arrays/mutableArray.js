/**the values they contain can be changed */

//creating array
let arr = [1, 2, 3, 4, 5];
console.log("Initial array:");
console.log(arr);
console.log(" ");

//push (Add the element to the end)
arr.push(6);
console.log("After using push():");
console.log(arr);
console.log(" ");

//pop (removes the last element)
arr.pop();
console.log("Afetr using pop():");
console.log(arr);
console.log(" ");

//shift (removes first element)
arr.shift();
console.log("Afetr using shift():");
console.log(arr);
console.log(" ");

//unshift (adds to the begining)
arr.unshift(1);
console.log("Afetr using unshift():");
console.log(arr);
console.log(" ");

//splice (removes and add element)
arr.splice(2, 2, 10, 20); //starting at index 2 removing 2 items
console.log("Afetr using splice():");
console.log(arr);
console.log(" ");

//sort (sorting in asscending order)
arr.sort((a, b) => a - b);
console.log("Afetr using sort():");
console.log(arr);
console.log(" ");

//reverse (reverse the array)
arr.reverse();
console.log("Afetr using reverse():");
console.log(arr);
console.log(" ");

//fill (fill with static value)
arr.fill(0, 2, 4);
console.log("Afetr using fill():");
console.log(arr);

/* mutating arrays with object*/

//create an array with object
let users = [
  { id: 1, name: "Luzan", age: 20 },
  { id: 2, name: "Bibek", age: 30 },
  { id: 3, name: "Ram", age: 28 },
];

//push()
users.push({ id: 4, name: "Dipesh", age: 22 });
console.log("After using push():");
console.log(users);
console.log(" ");

//pop()
users.pop();
console.log("After using pop():");
console.log(users);
console.log(" ");

//splice()
users.splice(1, 1, { id: 5, name: "Eva", age: 35 });
console.log("After using splice():");
console.log(users);
console.log(" ");

//sort()
users.sort((a, b) => a.age - b.age);
console.log("Sorting elements in asscending order by age:");
console.log(users);
console.log(" ");
