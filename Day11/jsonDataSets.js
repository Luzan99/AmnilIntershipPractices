/* Structured Data 
 Easily Readable
 Supports Nested Data 
 Lightweight */

//creating json datasets

let users = [
  {
    user_id: 1,
    name: "Luzan",
    email: "luzan@gmail.com",
    orders: [
      {
        order_id: 101,
        date: "2025-02-25",
        status: "Shipped",
        items: [
          { product_id: 1001, name: "Laptop", price: 1200.99, quantity: 1 },
          { product_id: 1002, name: "Mouse", price: 25.5, quantity: 2 },
        ],
      },
    ],
  },
  {
    user_id: 2,
    name: "Bibek",
    email: "bibek@gmail.com",
    orders: [
      {
        order_id: 102,
        date: "2025-02-24",
        status: "Processing",
        items: [
          { product_id: 1003, name: "Keyboard", price: 50.0, quantity: 1 },
        ],
      },
    ],
  },
];

//find luzans order
let luzanOrders = users.find((user) => user.name === "Luzan").orders;
console.log("displaying Luzans Order only");
console.log(luzanOrders);
console.log("");

//get all product name from all orders
let allProducts = users.flatMap((user) =>
  user.orders.flatMap((order) => order.items.map((item) => item.name))
);
console.log("All products from order");
console.log(allProducts);
console.log("");

//total price
let totalSpentByBibek = users
  .find((user) => user.name === "Bibek")
  .orders.flatMap((order) => order.items)
  .reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log(`Total spent by Bibek: Rs ${totalSpentByBibek.toFixed(2)}`);
console.log("");

//shipped orders only
let shippedOrders = users.flatMap((user) =>
  user.orders.filter((order) => order.status === "Shipped")
);
console.log(shippedOrders);
console.log("");

//again displaying shipped orders
shippedOrders.forEach((order) => {
  console.log("Shipped items details");
  console.log(`Order ID: ${order.order_id}, Date: ${order.date}, `);
  order.items.forEach((item) => {
    console.log(
      `  Product: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`
    );
  });
});

//map function
let userNames = users.map((user) => user.name);
console.log("");
console.log("Displaying user names");
console.log(userNames);
