/* These arrays can store multiple layers of data, making it useful for representing structures like grids, tables, or matrices */

//creating 2D array(Basic Approach)
let twoDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2D array:");
console.log(twoDArr);
console.log("");

//creating 3D array
let threeDArr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log("3D array:");
console.log(threeDArr);
console.log("");

//creating an empty array
let rows = 3;
let cols = 3;
let matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = []; // Create an empty sub-array
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = i * cols + j + 1; // Filling values
  }
}
console.log("Custom array:");
console.log(matrix);
console.log("");

/*alternative method*/

//Array.from()
let matrix1 = Array.from({ length: 3 }, () => Array(2).fill(0)); //length = rowws and Array() = columns
console.log("Creating array using Array.from()");
console.log(matrix1);
console.log("");

//fill() and map()
let matrix2 = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log("Creating array using fill() and map()");
console.log(matrix2);
