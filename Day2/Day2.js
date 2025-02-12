/*Javascript Control Flow */

const myage = 17;
const mysalary = 100;
const myheight = 6;
const myaccesoriesitems = ["Computer", "Mouse", "Keyboard"];
const correctage = [10, 20, 17, 30, 45, 80];
/* Comparison Operator */
console.log(7 == 7); //same value and type
console.log(7 == "7"); //same value, different type
console.log("luzan" == "Luzan"); //different values,same type

//Not equal to operator
console.log(7 != 7); //same value and type
console.log(7 != "7"); //same value, different type
console.log(7 != 8); //different values,same type

//Strictly equals to
console.log(7 === 7); //same value and type
console.log(7 === "7"); //same value, different type

//Strictly not equals to
console.log(7 !== 7); //same value and type
console.log(7 !== "7"); //same value, different type
console.log("luzan" !== "Luzan"); //different values,same type

//Greater than
console.log(7 > 6); //true
console.log(7 > 7); //false

//Greater than Equal to
console.log(7 >= 6); //true
console.log(7 >= 7); //true

//Less than and less than equal to
console.log(7 < 8); //true
console.log(7 <= 7); //true
console.log(7 <= 6); //false

/* Logical Opeartors */

//Logical And
console.log(myage > 18 && mysalary == 100); //1 correct results in false
console.log(myage < 18 && mysalary == 100); //both correct results in true

//Logical Or
console.log(myage > 18 || mysalary == 100); //1 correct results in true
console.log(myage < 18 || mysalary == 100); //both correct results in true
console.log(myage > 18 || mysalary > 100); //both incorrect results in false

//Logical Not
console.log(!(myage < 18)); //it true returns false and vice versa

/* If Else Statement*/

//checking if i can vote or not
if (myage >= 18) {
  console.log("You can vote");
} else {
  console.log("You are still underage");
}

//checking what i can get from my salary
if (mysalary >= 500) {
  console.log("You can buy 4 platers of momo");
} else if (mysalary >= 400) {
  console.log("you can buy 3 burgers");
} else if (mysalary >= 200) {
  console.log("you can buy 2 burgers");
} else {
  console.log("you can buy nothing");
}

//nested if
if (mysalary >= 50) {
  console.log("Welcome to our cafe");
  if (mysalary >= 80) {
    console.log("Buy burger");
  } else {
    console.log("Buy cold drinks");
  }
} else {
  console.log("Visit next time");
}

/* Loops */
// to display the items of an array
for (let i = 0; i < myaccesoriesitems.length; i++) {
  console.log(myaccesoriesitems[i]);
}

/* While Loop */
//countdown timer for starting a race
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Start");

/* Do while */
let salary = 50;
do {
  //prints salary every year until it meets the requiremnt
  console.log("My starting every year", salary);
  salary += 10;
} while (salary <= mysalary);

/* Break Statement */
for (let i = 0; i < correctage.length; i++) {
  if (correctage[i] === myage) {
    //cheks if my age is in the array
    console.log("Correct age found");
    break; //exist if found
  }
  console.log("Not found");
}

/* continue Statement */
for (let i = 0; i < correctage.length; i++) {
  if (correctage[i] === myage) {
    //cheks if my age is in the array
    console.log("Correct age found in continue statement");
    continue; //skips
  }
  console.log("Not found in continue statement");
}

/* Switch statement */
//checking what sports i am eligible for through my height
switch (true) {
  case myheight < 4:
    console.log("play table tennis");
    break;

  case myheight >= 4 && myheight < 5:
    console.log("eligble for football");
    break;

  case myheight >= 5 && myheight < 6:
    console.log("eligible for volleyball");
    break;

  case myheight >= 6:
    console.log("perfect for basketball");
    break;
  default:
    console.log("Default height");
}
