/* Recurrision */

function race(number) {
  console.log(number); //displays current number
  //stops when reaching 1
  if (number > 1) {
    race(number - 1); //recurrsion
  } else {
    console.log("GO");
    return;
  }
}
race(3);
