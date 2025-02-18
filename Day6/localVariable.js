/* Local Variables
Variables are declared inside a function
Only accesible within the function */

function myName() {
  const firstName = "Luzan"; //local variable
  console.log(`My name is  ${firstName}`);
}

myName(); //calling function

console.log(`My name is ${firstName}`); //calling variable outside the function
