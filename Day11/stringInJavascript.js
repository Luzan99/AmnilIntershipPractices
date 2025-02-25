/** The JavaScript string is a primitive data type that represents textual data*/

//creating string
let userName = " Luzan Maharjan ";
let password = "luzan123";

let description = `My name is ${userName} and my password is ${password}`; //template literal
console.log(description);

//different methods for string opeartions are

//trim
let trimmed = userName.trim();
console.log(`Original name: ${userName}`);
console.log(`Trimmed name : ${trimmed}`);
console.log("");

//uppercase
let upper = password.toUpperCase();
console.log(`Original password: ${password}`);
console.log(`Uppercase password : ${upper}`);
console.log("");

//lowercase
let lower = trimmed.toLowerCase();
console.log(`Original name: ${trimmed}`);
console.log(`Lowercased name : ${lower}`);
console.log("");

//replace
let replaced = trimmed.replace("Maharjan", "Maharjan123");
console.log(`Original name: ${trimmed}`);
console.log(`Replaced name : ${replaced}`);
console.log("");

//split
let words = replaced.split(" ");
console.log(`Original name: ${replaced}`);
console.log(words);
// console.log(`Arrayed: ${words}`); //doesnot display in array
console.log("");

//checking
let hasMaharjan = replaced.includes("Maharjan"); //true
let hasMaharjan1 = replaced.includes("Maharjan1"); //true
let hasMaharjan2 = replaced.includes("Maharjan2"); //false
console.log(`Original name: ${replaced}`);
console.log(`Maharjan ${hasMaharjan}`);
console.log(`Maharjan1 ${hasMaharjan1}`);
console.log(`Maharjan2 ${hasMaharjan2}`);
console.log("");

//extract sub string
let sub = replaced.substring(0, 5);
console.log(`Original name: ${replaced}`);
console.log(`Displaying from index: ${sub}`);
console.log("");

//repeating string twice
let repeated = sub.repeat(2);
console.log(`Original name: ${sub}`);
console.log(`Repeating: ${repeated}`);
console.log("");

//reversing
let reversed = replaced.split("").reverse().join("");
console.log(`Original name: ${replaced}`);
console.log(`Reversed: ${reversed}`);
console.log("");
