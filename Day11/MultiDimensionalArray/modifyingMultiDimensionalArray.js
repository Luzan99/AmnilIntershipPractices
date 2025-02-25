/**you can modify rows and columns using different in built functions */

/**2D array */

//creating 2D array
let data2D = [
  ["Apple", 10, true],
  [42, "Banana", false],
  [3.14, "Cherry", true],
];

//push() adds new row
console.log("Before adding row");
console.log(data2D);
console.log("");
data2D.push([7, 8, 9]);
console.log("After adding row");
console.log(data2D);
console.log("");

//adding new column
data2D[0].push(10);
data2D[1].push(11);
data2D[2].push(12);
data2D[3].push(13);
console.log("After addding a new column");
console.log(data2D);
console.log("");

// Removing last row
data2D.pop();
console.log("After removing last row");
console.log(data2D);
console.log("");

//remove specific element
data2D[0].splice(1, 1);
console.log("After removing specific element");
console.log(data2D);
console.log("");

/**3D array */
//creating an arrray
let data3D = [
  [
    ["Apple", "Banana", "Cherry"],
    ["Dog", "Elephant", "Fox"],
  ],
  [
    ["Guitar", "Harp", "Piano"],
    ["Red", "Green", "Blue"],
  ],
];

//push() adds new row
console.log("Before adding row");
console.log(data3D);
console.log("");
data3D.push([
  [13, 14, 15],
  [16, 17, 18],
]);
console.log("After adding row");
console.log(data3D);
console.log("");

//new row
data3D[1].push([19, 20, 21]);
console.log("After adding row");
console.log(data3D);
console.log("");

//new column
data3D[1][0].push(22);
console.log("After adding column");
console.log(data3D);
console.log("");

//pop
data3D.pop();
console.log("After adding removing last block");
console.log(data3D);
console.log("");
