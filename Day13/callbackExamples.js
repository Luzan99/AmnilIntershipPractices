/**In JavaScript, you can also pass a function as an argument to a function.
 * This function that is passed as an argument inside of another function is called a callback function
 */

/**Example 1 */
//normal function
function greet(firstName) {
  console.log("Example 1:");
  console.log("Normal Function");
  console.log(`My name is ${firstName}`);
}
//passing argument
greet("Luzan");
console.log("");

/**Example 2 */
//using callback function
function greet1(firstName, place) {
  console.log("Example 2:");
  console.log("Normal function:");
  console.log(`My name is ${firstName}`);
  place();
}
//callback function
function hello() {
  console.log("CallBack function:");
  console.log("I Live in Panga");
  console.log("");
}
// passing function as argument
greet1("Luzan", hello);

/**Example 3 */
// Callback Function Example
function greet3(firstName, myFunction) {
  console.log("Hello world");

  // callback function
  // executed only after the greet() is executed
  myFunction(firstName);
}

// callback function
function sayName(firstName) {
  console.log(`Hello my name is ${firstName}`);
}

// calling the function after 2 seconds
setTimeout(greet3, 2000, "Luzan", sayName);
