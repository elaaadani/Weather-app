
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
    let cityElement = document.querySelector("h1#city");
    let descriptionEelement = document.querySelector("h3#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    cityElement.innerHTML=response.data.main.name;
    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    descriptionEelement.innerHTML= response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
}
let apiKey = "921a29e043e83d24341a625517d5a318";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);