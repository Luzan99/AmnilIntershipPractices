/* Global Vairables
a variable declared outside any function
*/

const firstName = "Luzan";
let lastName = "Maharjan";

function myName() {
  console.log(`My name is : ${firstName}`); //acessing locally
}

//calling function
myName();

console.log(`My name is : ${firstName}`); //acessing globally

/*changing in gloabal variable */
function mName() {
  lastName = 1;
}
console.log(`Before function call : ${lastName}`); //before calling

mName(); //calling function

console.log(`After function call : ${lastName}`); //after calling
