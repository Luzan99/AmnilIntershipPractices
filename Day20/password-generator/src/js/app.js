document.addEventListener("DOMContentLoaded", () => {
  const passwordField = document.getElementById("password");
  const lengthSlider = document.getElementById("length");
  const lengthValue = document.getElementById("lengthValue");
  const uppercaseCheck = document.getElementById("uppercase");
  const lowercaseCheck = document.getElementById("lowercase");
  const numbersCheck = document.getElementById("numbers");
  const symbolsCheck = document.getElementById("symbols");
  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const strengthBadge = document.getElementById("strength");

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  function generatePassword() {
    let charSet = "";
    if (uppercaseCheck.checked) charSet += upperChars;
    if (lowercaseCheck.checked) charSet += lowerChars;
    if (numbersCheck.checked) charSet += numbers;
    if (symbolsCheck.checked) charSet += symbols;

    if (charSet.length === 0) {
      passwordField.value = "Select options!";
      return;
    }

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
      password += charSet[Math.floor(Math.random() * charSet.length)];
    }

    passwordField.value = password;
    checkStrength(password);
  }

  function checkStrength(password) {
    let strength = "Weak";
    let strengthColor = "red";

    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = "Medium";
      strengthColor = "orange";
    }
    if (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      strength = "Strong";
      strengthColor = "green";
    }

    strengthBadge.textContent = strength;
    strengthBadge.style.background = strengthColor;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied!");
  }

  generateBtn.addEventListener("click", generatePassword);
  copyBtn.addEventListener("click", copyToClipboard);
  lengthSlider.addEventListener(
    "input",
    () => (lengthValue.textContent = lengthSlider.value)
  );
});
