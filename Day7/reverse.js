/* To find reverse of a string */

function reverse(name) {
  if (name === "") return ""; //base case
  else return reverse(name.slice(1)) + name[0]; //recursive case
}

let x = "Lasdasd";
let y = reverse(x);

console.log(` The reverse of ${x} is ${y}`);
