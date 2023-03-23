// import './css/weatherpage.css'
import '../css/weatherpage.css';
import getWeather from './weather_data.js';
import getWeekly from './weekly_data.js';
import highlightsGrid from './statusDisplay.js'
import leftDisplay from './leftDisplay.js';
import week from './weeklyDisplay.js';
export default function(){
    let weatherData;
    let mainContainer = document.createElement('main');

    //CREATE LEFT SIDE OF PAGE TO DISPLAY MAIN SEARCH RESULTS
    let leftContainer = document.createElement('section');
    leftContainer.classList.add('left-container');
    mainContainer.appendChild(leftContainer);

    //CREATE RIGHT SIDE OF PAGE TO DISPLAY WEEKLY AND DAILY STATUS
    let rightContainer = document.createElement('section');
    rightContainer.classList.add('right-container');
    mainContainer.appendChild(rightContainer);

    // CREATE FORM
    let form = document.createElement('form');
    form.innerHTML = '<input type="text" name="city" id="city" placeholder="Search for places"/>';

    let button = document.createElement('button');
    button.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";

    form.appendChild(button);
    leftContainer.appendChild(form);

    // CREATE MAIN WEATHER DISPLAY
    let mainWeatherContainer = document.createElement('div');
    mainWeatherContainer.classList.add('left-data-container')
    leftContainer.appendChild(mainWeatherContainer);


    // CREATE WEEK DATA CONTAINER
    let weekContainer = document.createElement('div');
    let weekLabel = document.createElement('h3');
    weekLabel.textContent = "Week";
    weekContainer.classList.add('week-container');
    weekContainer.appendChild(weekLabel);
    rightContainer.appendChild(weekContainer);


    //CREATE DAILY WEATHER STATS CONTAINER
    let dailyStatsTitle = document.createElement('h3');
    dailyStatsTitle.textContent = "Today's Hightlights"
    let dailyStats = document.createElement('div');
    dailyStats.classList.add('daily-container');
    dailyStats.appendChild(dailyStatsTitle);
    rightContainer.appendChild(dailyStats)


form.addEventListener('submit', async(e) => {
    e.preventDefault();
    console.log(city.value);
    console.log('submit');
    let cityName = city.value;
    let formattedCity = cityName.replace(/ /g, '+');

})
async function getData(){
weatherData = await getWeather();
let weekly = await getWeekly();
mainWeatherContainer.innerHTML = leftDisplay(weatherData);
dailyStats.appendChild(highlightsGrid(weatherData));
weekContainer.appendChild(week());
}

getData();

    return mainContainer;
}
