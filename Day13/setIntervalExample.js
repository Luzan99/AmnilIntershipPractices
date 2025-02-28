/**In JavaScript, a block of code can be executed in specified time intervals */

// program to display a text using setInterval method
function greet() {
  console.log("Hello world");
}
setInterval(greet, 1000);

// program to display time every 5 seconds
function showTime() {
  // return new date and time
  const dateTime = new Date();

  // return the time
  const time = dateTime.toLocaleTimeString();

  console.log(time);
}

const display = setInterval(showTime, 5000);

// program to stop the setInterval() method after five times

let count = 0;

// function creation
const interval = setInterval(function () {
  // increasing the count by 1
  count += 1;

  // when count equals to 5, stop the function
  if (count === 5) {
    clearInterval(interval);
  }

  // display the current time
  const dateTime = new Date();
  const time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
