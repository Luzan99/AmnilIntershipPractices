document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout");

  if (!localStorage.getItem("user")) {
    alert("You must log in first!");
    window.location.href = "login.html";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Logged out!");
      window.location.href = "login.html";
    });
  }
});
