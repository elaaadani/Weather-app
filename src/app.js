

let currentTime = new Date();

function Hoy(date) {
  let hora = currentTime.getHours();
  let minutos = currentTime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let DiaActual = document.querySelector("h3#dia-actual");
  let HoraActual = document.querySelector("h3#hora-actual");

  DiaActual.innerHTML = ` ${currentDay} ${currentMonth} ${currentDate}`;
  HoraActual.innerHTML=` ${hora}:${minutos}`;
}
Hoy(currentTime);

function showTemperature(response)
{
    console.log(response.data.main.temp);
    let temperatureElement =document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionEelement = document.querySelector("h3#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");

    celsiusTemperature = response.data.main.temp;
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML=response.data.name;
    descriptionEelement.innerHTML= response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
}

function buscar(city)
{
  let apiKey = "921a29e043e83d24341a625517d5a318";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  
  event.preventDefault();
  let cityInputElement=document.querySelector("#city-input");
  buscar(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

 
let form= document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
