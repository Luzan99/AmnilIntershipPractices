// script.js
function calculateBMI() {
  // Get the values from input fields
  const weight = parseFloat(document.getElementById("weight").value);
  const heightFeet = parseFloat(document.getElementById("heightFeet").value);
  const heightInches = parseFloat(
    document.getElementById("heightInches").value
  );

  // Hide the error message initially
  document.getElementById("error-message").style.display = "none";
  document.getElementById("result").innerText = "";

  // Validate inputs
  if (isNaN(weight) || weight <= 0) {
    showError("Please enter a valid weight.");
    return;
  }

  if (isNaN(heightFeet) || heightFeet < 0) {
    showError("Please enter a valid height.");
    return;
  }

  if (isNaN(heightInches) || heightInches < 0 || heightInches >= 12) {
    showError("Please enter a valid height in inches (between 0 and 11).");
    return;
  }

  // Convert height to total inches (1 foot = 12 inches)
  const totalHeightInches = heightFeet * 12 + heightInches;

  // Convert height from inches to meters (1 inch = 0.0254 meters)
  const heightInMeters = totalHeightInches * 0.0254;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Display result
  let resultText = `Your BMI is: ${bmi.toFixed(2)}`;

  // Add classification based on BMI
  if (bmi < 18.5) {
    resultText += " (Underweight)";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultText += " (Normal weight)";
  } else if (bmi >= 25 && bmi < 29.9) {
    resultText += " (Overweight)";
  } else {
    resultText += " (Obesity)";
  }

  // Show result on the screen
  document.getElementById("result").innerText = resultText;
}

function showError(message) {
  // Display the error message
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = "block";
}
