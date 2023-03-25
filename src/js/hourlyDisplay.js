import '../css/hourlyDisplay.css'
let utils = require('./utilities.js');
import  getData from './hourly_data.js'
export default function(){

    let hourlyContainer = document.createElement('div');
    hourlyContainer.classList.add("hour");
//Create and append hourly display each box contains a timestamp, an image, and tempature for that time
// await response from getData function imported from hourly_data.js
    (async () => {
        let response = await getData();
        for(let i = 0; i < response.length; i++){
            let singlehour = document.createElement('div');
            let time = utils.getTime(response[i].dt)
            let timeDisplay = document.createElement('p');
            timeDisplay.innerHTML = time;
            singlehour.appendChild(timeDisplay);
            let image = document.createElement('img');
            image.src = `https://openweathermap.org/img/wn/${response[i].weather[0].icon}.png`
            singlehour.appendChild(image);
            let temp = document.createElement('p');
            temp.innerHTML = `${Math.floor(response[i].main.temp)}°`
            temp.classList.add('hour-temp');
            singlehour.appendChild(temp);
            singlehour.classList.add('single-hour');
            hourlyContainer.appendChild(singlehour);
        }
    })()
    return hourlyContainer;

}
