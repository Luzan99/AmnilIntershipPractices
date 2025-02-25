//creating an object in array

let users = [
  [
    { id: 1, name: "Luzan" },
    { id: 2, name: "Bibek" },
  ],
  [
    { id: 3, name: "Charlie" },
    { id: 4, name: "Dipesh" },
  ],
];

//adding new user in second row
users[1].push({ id: 5, name: "Someone" });
console.log("After using push");
console.log(users);
console.log("");
// users[2].push({ id: 5, name: "Someone" }); //type error

//remove user using filter
users[1] = users[1].filter((user) => user.name !== "Charlie");
console.log("After using filter");
console.log(users);
console.log("");

//doesnot affect as Luzan is in first row (index should be 0)
users[1] = users[1].filter((user) => user.name !== "Luzan");
console.log("After using filter");
console.log(users);
console.log("");

//modifying user name
users.flat().forEach((user) => {
  if (user.id === 2) user.name = "Bobby";
});
console.log("After modifying name");
console.log(users);
console.log("");

//get all usersname
let names = users.flat().map((user) => user.name);
console.log("Displaying Every user name");
console.log(names);
console.log("");
