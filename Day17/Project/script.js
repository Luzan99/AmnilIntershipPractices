document.getElementById("fetchAll").addEventListener("click", fetchAllData);
document
  .getElementById("fetchAllSettled")
  .addEventListener("click", fetchAllSettledData);
document
  .getElementById("fetchAny")
  .addEventListener("click", fetchFastestWeather);
document
  .getElementById("fetchRace")
  .addEventListener("click", fetchWithTimeout);

const output = document.getElementById("output");

//Assigning APIs
const API1 = "https://jsonplaceholder.typicode.com/users";
const API2 = "https://jsonplaceholder.typicode.com/posts";
const API3 =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=bfe285351c4901cae31c6745196050ac";
const API4 =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=5ded488e78784381a409511a5a3e652b";
const API5 =
  "https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=bfe285351c4901cae31c6745196050ac";

// Fetch users & posts using Promise.all()
function fetchAllData() {
  output.innerText = "Fetching data...";

  const usersAPI = fetch(API1).then((res) => res.json());
  const postsAPI = fetch(API2).then((res) => res.json());

  Promise.all([usersAPI, postsAPI])
    .then(([users, posts]) => {
      output.innerText = `Users: ${users.length}, Posts: ${posts.length}`;
    })
    .catch((error) => (output.innerText = `Error: ${error}`));
}

// Fetch weather & news using Promise.allSettled()
function fetchAllSettledData() {
  output.innerText = "Fetching data...";

  const weatherAPI = fetch(API3).then((res) => res.json());
  const newsAPI = fetch(API4).then((res) => res.json());

  Promise.allSettled([weatherAPI, newsAPI]).then((results) => {
    let text = results
      .map((result, index) =>
        result.status === "fulfilled"
          ? `API ${index + 1}: Success`
          : `API ${index + 1}: Failed`
      )
      .join("\n");
    output.innerText = text;
  });
}

// Fetch fastest weather API using Promise.any()
function fetchFastestWeather() {
  output.innerText = "Fetching fastest weather API...";

  const weatherAPI1 = fetch(API3).then((res) => res.json());
  const weatherAPI2 = fetch(API5).then((res) => res.json());

  Promise.any([weatherAPI1, weatherAPI2])
    .then(
      (response) =>
        (output.innerText = `Fastest API Response: ${JSON.stringify(response)}`)
    )
    .catch((error) => (output.innerText = `All APIs failed: ${error}`));
}

// Fetch with timeout using Promise.race()
function fetchWithTimeout() {
  output.innerText = "Fetching data with timeout...";

  const fetchData = fetch(API3).then((res) => res.json());

  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Request Timeout!"), 2000)
  );

  Promise.race([fetchData, timeout])
    .then(
      (response) =>
        (output.innerText = `API Response: ${JSON.stringify(response)}`)
    )
    .catch((error) => (output.innerText = ` ${error}`));
}
