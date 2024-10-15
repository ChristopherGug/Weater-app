const searchBtn = document.querySelector(".search-btn");
const APIKEY = "07422d82bbf7e0e73aca1bfb7d65a882";

searchBtn.addEventListener("click", async e => {
    e.preventDefault();
    const searchBar = document.querySelector(".city-input");
    
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${APIKEY}&units=${document.querySelector(".unit-type").checked ? "metric" : "imperial"}`
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("API problem");
        }
        
        const data = await response.json();
        console.log(data);


        let cityName = document.createElement("h2");
        let temperature = document.createElement("p");
        let condition = document.createElement("p");
    
        cityName.textContent = data.name;
        temperature.textContent = Math.floor(data.main.temp);
        condition.textContent = data.weather[0].main;
    
        cityName.classList.add("city-name");
        temperature.classList.add("temperature-text");
        condition.classList.add("weather-condition");
    
        const card = document.querySelector(".card");
        while (card.firstChild) {
            card.firstChild.remove();
        }
        card.appendChild(cityName); 
        card.appendChild(temperature); 
        card.appendChild(condition);
    }
    catch (error) {
        console.log(error);
    }
});