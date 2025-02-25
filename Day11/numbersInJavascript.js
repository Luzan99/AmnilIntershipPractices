/**numbers are used to represent numerical values. */

//creating a number

let num = 7.7777777;
let num1 = 7;

console.log(num, typeof num);
console.log(num1, typeof num1);
console.log("");
//different method in number

//convert to integer
let intNum = Math.floor(num);
console.log(`Original Number: ${num}`);
console.log(`Integer Numebr: ${intNum}`);
console.log("");

//convert to string
let strNum = num.toString();
console.log(`Original Number: ${num}`);
console.log(`String: ${strNum}`, typeof strNum);
console.log("");

//fix to two decimal
let fixedNum = num.toFixed(2);
console.log(`Original Number: ${num}`);
console.log(`Decimal number: ${fixedNum}`);
console.log("");

//string to number
let string = "99.99";
let parsedNum = parseFloat(string);
console.log(`String: ${string}`, typeof string);
console.log(`Converted number: ${parsedNum}`, typeof parsedNum);
console.log("");

//absolute value
let absNum = Math.abs(-25);
console.log(`Absolute value : ${absNum}`);
console.log("");

//generate random number between 0 and 1
let randomNum = Math.random();
console.log(`RAndom Number : ${randomNum}`);
console.log("");

let maxNum = Math.max(10, 20, 30, 5); //maximun
let minNum = Math.min(10, 20, 30, 5); //minimum
console.log(`Maximun value : ${maxNum}`);
console.log(`Minimun value : ${minNum}`);
console.log("");

//power
let powerNum = Math.pow(2, 3);
console.log(`(2^3): ${powerNum}`);
console.log("");

//squareroot
let sqrtNum = Math.sqrt(16);
console.log(`Squareroot of 16: ${sqrtNum}`);
console.log("");
