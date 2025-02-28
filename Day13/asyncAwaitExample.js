/** We use the async keyword with a function to represent that the function is an asynchronous function.
 * The await keyword is used inside the async function to wait for the asynchronous operation.
 */

// async function example
async function f() {
  console.log("Example 1");
  console.log("Async function.");
  return Promise.resolve(1);
}
f();

async function f1() {
  console.log("");
  console.log("Example 2");
  console.log("Async function.");
  return Promise.resolve(1);
}
f1().then(function (result) {
  console.log(result);
  console.log("");
});

// a promise
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  const result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();
