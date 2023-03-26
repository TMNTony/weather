import "./style.css";

const zip = document.getElementById("#zip");
const result = document.querySelector(".result");
const zipBtn = document.querySelector("#zipBtn");

async function myFetcher(zipcode) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=66cb727fba2c444da1b31139232203&q=${zipcode}&aqi=no`, { mode: "cors" });
  const weatherData = await response.json();
  result.innerHTML = weatherData.current.temp_f;
  console.log(weatherData);
  console.log(weatherData.current.temp_f);
}

zipBtn.addEventListener("click", () => {
  const zipcode = zip.value;
  myFetcher(zipcode);
});

myFetcher(35244);
console.log("Hello World");
