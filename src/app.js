function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "e32e276f7fbc10da2ad0ce3f431a1ad1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(displayTemperature);
