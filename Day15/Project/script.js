// Function to fetch the weather data
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "bfe285351c4901cae31c6745196050ac"; // Replace with your OpenWeatherMap API key

  // Construct the URL for the weather API request
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    // Check if the response is not okay (e.g., city not found)
    if (!response.ok) {
      throw new Error("City not found");
    }

    // Parse the weather data from the response
    const data = await response.json();

    // Display the weather data on the page
    displayWeather(data);
  } catch (error) {
    displayError(error.message);
  }
}

// Function to display the weather data
function displayWeather(data) {
  const weatherInfo = document.getElementById("weather-info");

  // Create HTML structure for displaying weather details
  const weatherHTML = `
        <h2>Weather Details</h2>
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <img 
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" 
            alt="Weather Icon"
            class="weather-icon"
        />
    `;

  // Insert the generated HTML into the weather-info section
  weatherInfo.innerHTML = weatherHTML;

  // Remove the 'hidden' class to show the weather info
  weatherInfo.classList.remove("hidden");
}

// Function to display error messages
function displayError(errorMessage) {
  const weatherInfo = document.getElementById("weather-info");

  // Show error message
  weatherInfo.innerHTML = `<p style="color:red; font-weight: bold;">${errorMessage}</p>`;

  // Remove the 'hidden' class to show the error message
  weatherInfo.classList.remove("hidden");
}
