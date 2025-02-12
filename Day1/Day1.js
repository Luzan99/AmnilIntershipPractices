/* Day 1 of learning Basic Javascript */

//Output through console.log
console.log("Hello Its the first day of learining Javascript");

/* Variables in JavaScript */

//Declare variable
let num;
var age;

//Assign variable
num = 100;
console.log(num);

//Changing value of variables
let college = "hello";
console.log(college);

college = "hi how are you";
console.log(college);

//Assign multiple variable
let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

/*Rules for naming variables */

//must start with letter,underscore(_) or dollar($)
let pikachu = "pokemon"; //valid
let Pikachu = "pokemon"; //valid (Casesensitive)
let _pikachu = "pokemon"; //valid
let $pikachu = "pokemon"; //valid

console.log(pikachu, Pikachu, _pikachu, $pikachu);

//invalid
// let 7pikachu="pokemon"; //error

//For Constatnts
const abc = 5;
// abc = 10; //error as constants value cannot be changed as let

/*Data Types in JavaScript */
let myname = "luzan"; //string
let myage = 20; //number
let unmarried = true; //boolean
let myhome; //undefined
let mysalary = null; //null
//Object
let myclassmate = {
  firstName: "Ram",
  lastName: "Maharjan",
  class: 10,
  age: 25,
};

//Checking Datatype
console.log(typeof myname); //returns string
console.log(typeof myage); //returns number
console.log(typeof unmarried); //returns boolean
console.log(typeof myhome); //returns undefined
console.log(typeof mysalary); //returns object
console.log(typeof myclassmate); //returns object

/* Operators in Javascript */

//Airtmetic
let x = 5;
let y = 3;

console.log("Addition: x + y :", x + y); //Addition
console.log("Subtraction: x - y :", x - y); //Subtraction
console.log("Multiplication: x * y :", x * y); //Multiplication
console.log("Division: x / y :", x / y); //Division
console.log("Remainder: x % y :", x % y); //Remainder
console.log("Post Increment: x++ :", x++); //Post Increment
console.log("Pre Increment: ++x :", ++x); //Pre Increment
console.log("Decrement: --x :", --x); //Decrement
console.log("Exponentiation: x ** y :", x ** y); //Exponentiation

//Assignment
console.log("Assignment: x :", x); //Assignment
console.log("Addition Assignment: x += y :", (x += y)); //Addition Assignment
console.log("Subtraction Assignment: x -= y :", (x -= y)); //Subtraction Assignment
console.log("Multiplication Assignment: x *= y :", (x *= y)); //Multiplication Assignment
console.log("Division Assignment: x /= y :", (x /= y)); //Division Assignment
console.log("Remainder Assignment: x %= y :", (x %= y)); //Remainder Assignment
console.log("Exponentiation Assignment: x **= y :", (x **= y)); //Exponentiation Assignment

//Comparison
console.log(x == y); //Equal to
console.log(x != y); //Not Equal to
console.log(x === y); //strictly Equal to
console.log(x > y); //Greater than
console.log(x < y); //Smaller than
console.log(x >= y); //Greater than Equal to
console.log(x <= y); //Smaller than Equal to

//Logical

//And
console.log(x > 7 && y > 5);
console.log(x < 7 && y < 5);

//Or
console.log(x > 7 || y > 5);
console.log(x < 7 || y < 5);

//Not
console.log(!(x == 5));
console.log(!(x < 3));

//Ternary
console.log(x >= 18 ? "You are adult" : "You are child");

/* Type Conversions */

//implicit
let output;
output = "1" + 2;
console.log(output, typeof output); //converts number to string and concat

//implicit number conversion
output = "1" - "2";
console.log(output, typeof output); //converts to number
output = "1" - 2;
console.log(output, typeof output); //converts to number
output = "1" * 2;
console.log(output, typeof output); //converts to number
output = "1" / 2;
console.log(output, typeof output); //converts to number
//explicit
output = Number("7");
console.log(output, typeof output); //converts string to number using Number function
output = String(true);
console.log(output, typeof output); //converts boolean to string using String function
output = Boolean(0);
console.log(output, typeof output); //converts number to boolean using Boolean function
