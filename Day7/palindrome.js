/* To check given string is palindrome or not  */

function palinDronme(name) {
  if (name.length < 1) return true; //base case
  if (name[0] !== name[name.length - 1]) return false; //base class
  else return palinDronme(name.slice(1, -1)); //recursive class
}

let x = "Luzan";
let y = "dad";
let z = "madam";

let a = palinDronme(x);
let b = palinDronme(y);
let c = palinDronme(z);

console.log(`${x} a palindrome or not : ${a}`);
console.log(`${y} a palindrome or not : ${b}`);
console.log(`${z} a palindrome or not : ${c}`);
