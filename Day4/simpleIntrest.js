/* Calculating Simple Interest */

//Firstly create a function with required arguments(principle,rate and time)
function simpleInterest(principle, rate, time) {
  const interest = (principle * rate * time) / 100; //mathematical formula
  console.log("Interest:", interest);
}
//Now call the function by passing values
simpleInterest(1000, 5, 2); //100
