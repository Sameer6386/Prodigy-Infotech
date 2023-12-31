const apiKey = "f2d1349c64add8c5605bd56a4419cb24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");

function updateWeather(data) {
    cityElement.innerHTML = data.name;
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
    }

    weatherElement.style.display = "block";
    errorElement.style.display = "none";
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        errorElement.style.display = "block";
        weatherElement.style.display = "none";
    } else {
        const data = await response.json();
        updateWeather(data);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
