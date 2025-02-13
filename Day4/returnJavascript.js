/* Return is sued to return a value in JS 
code return in the function after return is terminated
*/
function display() {
  console.log("Hello");
  return "Hi";
  console.log("Hola");
}
console.log(display());

//to perform operations
function addTwo(num1, num2) {
  console.log("Airthmetic Operation:");
  return num1 + num2;
}
console.log(addTwo(4, 6));
