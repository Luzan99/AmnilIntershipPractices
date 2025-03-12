import "./css/styles.css"; // Import CSS
console.log("Vite is running!");

// Redirect to login page on load
document.addEventListener("DOMContentLoaded", () => {
  window.location.href = "/src/pages/login.html";
});
