import '../css/weatherpage.css';
import getWeather from './weather_data.js';
import highlightsGrid from './statusDisplay.js';
import leftDisplay from './leftDisplay.js';
import hourly from './hourlyDisplay.js';
export default function(){
    let weatherData;
    let mainContainer = document.createElement('main');

    //CREATE LEFT SIDE OF PAGE TO DISPLAY MAIN SEARCH RESULTS
    let leftContainer = document.createElement('section');
    leftContainer.classList.add('left-container');
    mainContainer.appendChild(leftContainer);

    //CREATE RIGHT SIDE OF PAGE TO DISPLAY HOURLY AND DAILY STATUS
    let rightContainer = document.createElement('section');
    rightContainer.classList.add('right-container');
    mainContainer.appendChild(rightContainer);

    // CREATE FORM
    let form = document.createElement('form');
    form.innerHTML = '<input type="text" name="city" id="city" placeholder="Search for places"/ required>';

    let button = document.createElement('button');
    button.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";

    form.appendChild(button);
    leftContainer.appendChild(form);
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('err-msg');
    leftContainer.appendChild(errorMsg);

    // CREATE MAIN WEATHER DISPLAY
    let mainWeatherContainer = document.createElement('div');
    mainWeatherContainer.classList.add('left-data-container')
    leftContainer.appendChild(mainWeatherContainer);


    // CREATE HOURLY DATA CONTAINER
    let hourlyContainer = document.createElement('div');
    let hourlyLabel = document.createElement('h3');
    hourlyLabel.textContent = "Hourly";
    hourlyContainer.classList.add('hourly-container');
    hourlyContainer.appendChild(hourlyLabel);
    rightContainer.appendChild(hourlyContainer);


    //CREATE DAILY WEATHER STATS CONTAINER
    let higlightsTitle = document.createElement('h3');
    higlightsTitle.textContent = "Today's Hightlights"
    let dailyStats = document.createElement('div');
    dailyStats.classList.add('daily-container');
    dailyStats.appendChild(higlightsTitle);
    rightContainer.appendChild(dailyStats)

//When page first loads display current weather in San Diego, CA
//by calling getWeather function and appending to respective elements
document.addEventListener("DOMContentLoaded", async function(){
    weatherData = await getWeather('San+Diego');
    mainWeatherContainer.innerHTML = leftDisplay(weatherData);
    dailyStats.appendChild(highlightsGrid(weatherData));
    hourlyContainer.appendChild(hourly());
})
//When user submits new city name fetch data and display. If there is error
// Error message wil display
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let cityName = city.value;
    let formattedCity = cityName.replace(/ /g, '+');
    try{
        weatherData = await getWeather(formattedCity);
        errorMsg.innerHTML = '';
        dailyStats.removeChild(document.querySelector('.grid-container')); //Refresh new data
        hourlyContainer.removeChild(document.querySelector('.hour')); //Refresh new data
        mainWeatherContainer.innerHTML = leftDisplay(weatherData);
        dailyStats.appendChild(highlightsGrid(weatherData));
        hourlyContainer.appendChild(hourly());
    }catch(e){
        errorMsg.innerHTML = e
    }
});
    return mainContainer;
}
