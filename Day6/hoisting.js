/* JavaScript Hoisting */

/* Variable Hoisting */

//before declaring variable
console.log(firstName);
// console.log(lastName);

//declare
// let lastName = "maharajan";
var firstName = "Luzan";

/* Function Hoisting */

myName();

function myName() {
  console.log(`hello`);
}
