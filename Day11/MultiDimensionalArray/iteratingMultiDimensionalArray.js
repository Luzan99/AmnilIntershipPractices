//2D array iteration

//creating 2D array
let data2D = [
  ["Apple", 10, true],
  [42, "Banana", false],
  [3.14, "Cherry", true],
];

//using traditional for loop
for (let i = 0; i < data2D.length; i++) {
  for (let j = 0; j < data2D[i].length; j++) {
    let element = data2D[i][j];
    console.log(
      `Element at [${i}][${j}] is: ${element}, Type: ${typeof element}`
    );
  }
}

//using for of loop
console.log("");
console.log("Using for of Loop:");
for (let row of data2D) {
  for (let item of row) {
    console.log(`Element is : ${item}`);
  }
}

//using foreach of loop
console.log("");
console.log("Using foreach Loop:");
data2D.forEach((row, i) => {
  row.forEach((item, j) => {
    console.log(`Element at [${i}][${j}] is: ${item}`);
  });
});

//using map
console.log("");
console.log("Using map():");
data2D.map((row, i) => {
  return row.map((item, j) => {
    console.log(`Element at [${i}][${j}] is: ${item}`);
    return item;
  });
});

/** 3D array iteration */

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

//traditional for loop
console.log("");
console.log("Using traditional for Loop in 3D array:");
for (let i = 0; i < data3D.length; i++) {
  for (let j = 0; j < data3D[i].length; j++) {
    for (let k = 0; k < data3D[i][j].length; k++) {
      console.log(`Elemnt ar [${i}] [${j}] [${k}] is : ${data3D[i][j][k]}`);
    }
  }
}

//using for of loop
console.log("");
console.log("Using for of Loop in 3D array:");
for (let matrix of data3D) {
  for (let row of matrix) {
    for (let item of row) {
      console.log(`Elemnt is : ${item}`);
    }
  }
}

//using foreach loop
console.log("");
console.log("Using foreach Loop in 3D array:");
data3D.forEach((matrix, i) => {
  matrix.forEach((row, j) => {
    row.forEach((item, k) => {
      console.log(`Elemnt ar [${i}] [${j}] [${k}] is : ${item}`);
    });
  });
});

//using map()
console.log("");
console.log("Using map() in 3D array:");
data3D.map((matrix, i) => {
  return matrix.map((row, j) => {
    return row.map((item, k) => {
      console.log(`Element at [${i}][${j}][${k}] is: ${item}`);
      return item;
    });
  });
});

//using flat()
console.log("");
console.log("Using flat() in 3D array:");
data3D.flat(2).forEach((item) => {
  console.log(`Element is: ${item}`);
});
