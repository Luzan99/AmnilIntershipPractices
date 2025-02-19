/* Factorial of a given number */

function factorial(num) {
  if (num === 0 || num === 1) return 1; //base case
  else return num * factorial(num - 1); //recurrive case
}

let x = 5;
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);
