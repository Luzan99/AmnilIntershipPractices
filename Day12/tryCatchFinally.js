/** try block – Contains the code that might throw an error.
 * catch block – Executes if an error occurs in the try block.
 * finally block – (Optional) Executes after try and catch, regardless of whether an error occurred.
 */

//example 1 to try to use uppercase to a number
try {
  let num = 10;
  console.log(num.toUpperCase());
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This will always execute.");
}
console.log("");

//example 2 to divide a number
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    console.log("Result:", a / b);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Sum attempted ", a + b);
  }
}

divide(10, 2);
divide(5, 0);
