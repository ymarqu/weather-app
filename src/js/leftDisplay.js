let utils = require('./utilities.js');
export default function(data){

    //creates display for left side of page containing main temp, img, city and time for the city user entered
    //this is to be added to innerHTML of parent element.
    let date = new Date(data.dt * 1000).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"});
    let time = utils.getTime(data.dt);
    return `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' width='200' height='200'>
    <h1>${Math.floor(data.main.temp)}°</h1>
    <div class="zone-container">
    <p class="date"><i class="fa-regular fa-calendar-days"></i> ${date}</p>
    <p class="time"><i class="fa-regular fa-clock"></i> ${time}</p>
    </div>
    <p class="cloud-percent"><i class="fa-solid fa-cloud"></i> Cloud Percentage: ${data.clouds.all}%</p>
    <p class="weather-desc">${data.weather[0].description}</p>
    <p>${data.name}, ${data.sys.country}</p>`
}
