/* These are some of the built in JS functions */

/* Math Library Functions */

//Suqare root
const numSquare = Math.sqrt(7);
console.log("Square Root:", numSquare);

//Rounding
const numRound = Math.round(7.7);
console.log("Rounding Figure:", numRound);

//Power
const numPower = Math.pow(7, 77);
console.log("7 to the power of 77 :", numPower);

/* String Library Functions */

//Uppercase and Lowercase
const testString = "luZaN";
console.log(testString.toUpperCase());
console.log(testString.toLowerCase());

//Finding Length of string
const testLength = "Luzan";
console.log(testLength.length);

/* Array Library function */

const testArray = [1, 8, 9, 4, 6, 7];

//Sorting
console.log(testArray.sort());

//Filtering
console.log(testArray.filter((numbers) => numbers % 2 === 0)); //displaying even numbers

/* Date Library Function */
//Current date
const testToday = new Date();
console.log(testToday.toDateString());

//Extracting year
console.log(testToday.getFullYear());

/* Arrow Function */
const output = (a) => a * a;
console.log(output(5));

/* Comparison between Normal and Arrow */
function result(b) {
  return b * b;
}
console.log(result(6));