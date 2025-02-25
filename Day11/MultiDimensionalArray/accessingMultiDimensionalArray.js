/**You can access elements using row and column indexes: */
//creating 2D array(Basic Approach)
let twoDArr = [
  ["Apple", "Banana", "Cherry"],
  ["Dog", "Elephant", "Fox"],
  ["Guitar", "Harp", "Piano"],
];
console.log("2D array element:");
console.log(twoDArr[0][0]); //access like in matrix
console.log(twoDArr[0][1]);
console.log(twoDArr[0][2]);
console.log(twoDArr[1][0]);
console.log(twoDArr[1][1]);
console.log(twoDArr[1][2]);
console.log(twoDArr[2][0]);
console.log(twoDArr[2][1]);
console.log(twoDArr[2][2]);
console.log("");
// console.log(twoDArr[3][0]); //type error

//creating 3D array
let threeDArr = [
  [
    ["Apple", "Banana", "Cherry"],
    ["Dog", "Elephant", "Fox"],
    ["Guitar", "Harp", "Piano"],
  ],
  [
    ["Red", "Green", "Blue"],
    ["Circle", "Square", "Triangle"],
    ["One", "Two", "Three"],
  ],
];
console.log("3D array element:");
console.log(threeDArr[0][0][0]);
console.log(threeDArr[0][0][1]);
console.log(threeDArr[0][0][2]);
console.log(threeDArr[0][1][0]);
// console.log(threeDArr[2][1][1]); //type error
