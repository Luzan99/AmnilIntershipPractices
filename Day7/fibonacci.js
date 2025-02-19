function fibonaccii(num) {
  if (num === 0) return 0; //base case
  if (num === 1) return 1; //base case
  else return fibonaccii(num - 1) + fibonaccii(num - 2); //recursive case
}

let x = 12;
let y = fibonaccii(x);
console.log(`Fibonacci of ${x} is ${y}`);
