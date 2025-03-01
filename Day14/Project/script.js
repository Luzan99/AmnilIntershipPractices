const API_URL = "https://dummyjson.com/carts";

// Function to update the UI table
function updateTable(carts) {
  const tableBody = document.getElementById("cart-table-body");
  tableBody.innerHTML = ""; // Clear table before updating

  carts.forEach((cart) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${cart.id}</td>
            <td>${cart.userId}</td>
            <td>${cart.products
              .map((p) => `${p.title} (x${p.quantity})`)
              .join(", ")}</td>
            <td>$${cart.total}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Fetch all carts
async function getAllCarts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("All Carts:", data);
    updateTable(data.carts);
  } catch (error) {
    console.error("Error fetching carts:", error);
  }
}

// Fetch a single cart by ID
async function getCartById(cartId) {
  try {
    const response = await fetch(`${API_URL}/${cartId}`);
    const data = await response.json();
    console.log(`Cart ${cartId}:`, data);
    updateTable([data]); // Display single cart
  } catch (error) {
    console.error(`Error fetching cart ${cartId}:`, error);
  }
}
