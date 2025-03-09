document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const logoutBtn = document.getElementById("logout");

  // Login Function
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      const users = await res.json();

      if (users.length > 0) {
        localStorage.setItem("user", JSON.stringify(users[0]));
        alert("Login Successful!");
        window.location.href = "home.html";
      } else {
        alert("Invalid email or password!");
      }
    });
  }

  // Register Function
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("reg-email").value;
      const password = document.getElementById("reg-password").value;

      const res = await fetch(`http://localhost:5000/users?email=${email}`);
      const existingUsers = await res.json();

      if (existingUsers.length > 0) {
        alert("Email already registered!");
        return;
      }

      const newUser = { email, password };
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      alert("Registration Successful! Please login.");
      window.location.href = "login.html";
    });
  }

  // Logout Function
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Logged out!");
      window.location.href = "login.html";
    });
  }

  // Protected Route (Redirect to Login if not Authenticated)
  if (window.location.pathname.includes("home.html")) {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("You must log in first!");
      window.location.href = "login.html";
    }
  }
});
