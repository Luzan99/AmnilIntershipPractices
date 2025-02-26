document.getElementById("fetchData").addEventListener("click", fetchBasicUsers);
document
  .getElementById("fetchDetails")
  .addEventListener("click", fetchAndDisplayUserDetails);

// Function to clear previous data
function clearContainer() {
  document.getElementById("dataContainer").innerHTML = "";
}

// Function to set loading state
function setLoadingState() {
  document.getElementById("dataContainer").innerHTML = "Loading...";
}

// Function to fetch users from API
async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data?.users || []; // Ensure it always returns an array
}

// Function to fetch and display basic user info
async function fetchBasicUsers() {
  clearContainer();
  setLoadingState();

  try {
    const users = await fetchUsers();
    if (!users.length) throw new Error("No users found");

    document.getElementById("dataContainer").innerHTML = users
      .map(
        (user) => `
            <div>
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
            </div>
            <hr>
        `
      )
      .join("");
  } catch (error) {
    showError(error);
  }
}

// Function to fetch and display detailed user info
async function fetchAndDisplayUserDetails() {
  clearContainer();
  setLoadingState();

  try {
    const users = await fetchUsers();
    if (!users.length) throw new Error("No users found");

    document.getElementById("dataContainer").innerHTML = users
      .map(
        (user) => `
            <div class="user-card">
                <img src="${user.image}" alt="${
          user.firstName
        }" class="user-image">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Company:</strong> ${user.company?.name || "N/A"} (${
          user.company?.title || "N/A"
        })</p>
                <p><strong>Address:</strong> ${
                  user.address?.address || "N/A"
                }, ${user.address?.city || "N/A"}</p>
            </div>
            <hr>
        `
      )
      .join("");
  } catch (error) {
    showError(error);
  }
}

// Function to display error message
function showError(error) {
  document.getElementById(
    "dataContainer"
  ).innerHTML = `<p class="error">Error: ${error.message}</p>`;
}
