/**The setTimeout() method executes a block of code after the specified time
 * setTimeout(function, milliseconds)
 */

//basic example
console.log("Before timeout print this");
setTimeout(() => {
  console.log("Executed after 5 second");
}, 5000); //1000 is 1 second
console.log("After timeout print this");
console.log("");

//timeout with parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 2000, "Luzan");

//clear timeout
const timeoutId = setTimeout(() => {
  console.log("This won't be printed");
}, 5000);
clearTimeout(timeoutId);
