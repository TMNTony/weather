import "./style.css";

const zipBtn = document.querySelector("#zipBtn");
const DEFAULT_ZIPCODE = "35244";

async function myFetcher(zipcode) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66cb727fba2c444da1b31139232203&q=${zipcode}&aqi=no`, { mode: "cors" });
  const weatherData = await response.json();
  return weatherData;
}

function updateWeather(weatherData) {
  const temp = document.querySelector(".temp");
  const city = document.querySelector(".city");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");

  temp.innerHTML = weatherData.current.temp_f;
  city.innerHTML = weatherData.location.name;
  wind.innerHTML = weatherData.current.wind_mph;
  humidity.innerHTML = weatherData.current.humidity;
}

function background(weatherData) {
  const isDay = weatherData.current.is_day;
  if (isDay == 0) {
    document.body.classList.add("night");
  }
}

window.addEventListener("load", async () => {
  const weatherData = await myFetcher(DEFAULT_ZIPCODE);
  updateWeather(weatherData);
  console.log(weatherData);
});

zipBtn.addEventListener("click", async () => {
  const zip = document.getElementById("zip");
  const zipcode = zip.value;
  const weatherData = await myFetcher(zipcode);
  updateWeather(weatherData);
  background(weatherData);
});
