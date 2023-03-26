import "./style.css";

const zip = document.getElementById("zip");
const result = document.querySelector(".result");
const zipBtn = document.querySelector("#zipBtn");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");

async function myFetcher(zipcode) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66cb727fba2c444da1b31139232203&q=${zipcode}&aqi=no`, { mode: "cors" });
  const weatherData = await response.json();
  temp.innerHTML = weatherData.current.temp_f;
  city.innerHTML = weatherData.location.name;

  console.log(weatherData);
  console.log(weatherData.current.temp_f);
}

zipBtn.addEventListener("click", () => {
  const zipcode = zip.value;
  myFetcher(zipcode);
});

myFetcher(35244);
