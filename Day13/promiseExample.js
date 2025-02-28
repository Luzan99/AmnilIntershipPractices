/** In JavaScript, a promise is a good way to handle asynchronous operations
 * It is used to find out if the asynchronous operation is successfully completed or not.
 * A promise may have one of three states.
 * Pending
 * Fulfilled
 * Rejected
 */

//simple example
const count = true;
console.log("Example 1");
const countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});
console.log(countValue);
console.log("");

//example with then and catch
console.log("Example 2");
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change to false to test rejection

  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!"); // Fulfilled
    } else {
      reject("Operation Failed!"); // Rejected
    }
  }, 2000);
});

// Handling the promise
myPromise
  .then((result) => console.log(result)) // Executes if resolved
  .catch((error) => console.log(error)); // Executes if rejected
