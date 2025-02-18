/* Block-Level Variables 
ES6 introduced block-level scoping with the let and const keywords */

function myName() {
  let firstName = "Luzan"; //declare variable locally

  if (true) {
    //declare block-level variable
    let firstName = "Bibek";
    console.log(`My name is: ${firstName}`);
  }
  console.log(`My name is: ${firstName}`);
}

myName(); //function call
