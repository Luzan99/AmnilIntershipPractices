/* Using shorthand makes your JavaScript code shorter, cleaner, and more readable. */

/* Declaring Variables*/

let x = 10,
  y = 20,
  z = 30; //shortHand

//Long
let a = 10;
let b = 20;
let c = 30;

/* If else shorter version*/

//shorthand
let age = 10;
let vote = age >= 18 ? "Yes" : "No";

//long
let testAge = 10;
let testVote;
if (testAge >= 18) {
  testVote = "yes";
} else {
  testVote = "No";
}

/* Logical OR */
let userName = "Luzan";
let name = userName || "Guest"; //shortHand

//long
let testName;
if (userName) {
  testName = userName;
} else {
  testName = "Guest";
}

/* Arrow Function */
//shortHand
const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 3));

//long
function testSum(num3, num4) {
  return num3 + num4;
}
console.log(testSum(5, 3));

/* Implicit return */
//shortHand
const greet = (impName) => `Hello, ${impName}!`;
console.log(greet("Luzan"));

//long
const testGreet = function (impTestName) {
  return `Hello ${impTestName}`;
};
console.log(testGreet("Luzan"));

/* Object Property */
//shortHand
let oName = "Luzan Maharjan",
  oAge = 23;
const person = { oName, oAge };

//long
let objName = "Luzan Maharjan",
  objge = 23;
const testPerson = { objName: objName, oAge: oAge };

/* Template Literals */
//shortHand
let tempName = "Luzan 99";
console.log(`Hello how are you ${tempName}!`);

//long
let testTemName = "luzan 99";
console.log("Hello how are you " + testTemName + "!");

/*Spread Operator */

//shortHand
const sarr = [1, 2, 3];
const sarr1 = [...sarr, 4, 5];
console.log(sarr1);

//long
const sarr2 = [1, 2, 3];
const sarr3 = sarr2.concat([4, 5]);
console.log(sarr3);

/* map() function */
//shortHand
const nums = [1, 2, 3];
const squares = nums.map((num) => num * num);
console.log(squares); // [1, 4, 9]

//long
const nums1 = [1, 2, 3];
const squares1 = [];
for (let i = 0; i < nums1.length; i++) {
  squares1.push(nums1[i] * nums1[i]);
}
console.log(squares1);

/* filter() */
//shortHand
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

/* find() */
const users = [{ name: "Luzan" }, { name: "Bibek" }, { name: "Ram" }];
const user = users.find((user) => user.name === "Luzan");
console.log(user);

/* include() */
const colors = ["red", "blue", "green"];
console.log(colors.includes("blue"));
