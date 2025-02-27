/**The throw statement in JavaScript is used to create custom errors and explicitly throw exceptions */

//example 1
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!"); //better for debugging
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}

//example 2
function checkAge(age) {
  if (age < 18) {
    throw "You must be 18 or older!";
  }
  console.log("Access granted.");
}

try {
  checkAge(16);
} catch (error) {
  console.log("Error:", error);
}
