let weather = {
    "apiKey": "84120fe114ef83e8245e2373bd8cd8f5",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // conversion from Kelvin to Celsius
        const tempCelsius = Math.round(temp - 273.15);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon +".png"
        document.querySelector(".description").innerText = description;
        // display in celsius
        document.querySelector(".temp").innerText = tempCelsius + "°C"; 
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"; 
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('./images/sheep2.jpeg" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}; 

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

});

weather.fetchWeather("London")