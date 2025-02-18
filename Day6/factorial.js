/* Factorial Number */

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const result = factorial(5);
console.log(`The factorial of 5 is ${result}`);
