/* Countdown to begin the race */
function race(num) {
  if (num < 1) return; //base case
  else console.log(num); //recurrsive case
  race(num - 1);
}
console.log("Race is strating");
race(3);
console.log("GO");
