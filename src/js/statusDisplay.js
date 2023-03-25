import '../css/highlights.css';
let utils = require('./utilities.js');

export default function(data){

//initailize titles of highlight boxes
const displayBoxes = [
'Feels like...',
'Wind Status',
'Sunset & Sunrise',
'Humidity',
'Visibility',
'Min & Max'
];

//create container to hold all highlights
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

//Create box for each highlight and append title
displayBoxes.forEach((title, index) => {
    let box = document.createElement('div');
    box.classList.add('box',`box${index}`);
    let boxTitle = document.createElement('p');
    boxTitle.classList.add('box-title');
    boxTitle.textContent = title;
    box.appendChild(boxTitle);
    gridContainer.appendChild(box);
});

// create and append 'Feels like' weather display
let feelsLike = gridContainer.querySelector('.box0');
let feelsLikeData = document.createElement('p');
feelsLikeData.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>  ${Math.floor(data.main.feels_like)}°`
feelsLikeData.classList.add("temp")
feelsLike.appendChild(feelsLikeData);

// create and append wind speed data
let windBox = gridContainer.querySelector('.box1');
let windData = document.createElement('p');
windData.innerHTML = `<i class="fa-solid fa-wind"></i>  ${data.wind.speed} mph`
windData.classList.add("wind");
windBox.appendChild(windData);

let sun = gridContainer.querySelector('.box2');
//create and append sunrise data
let sunriseTime = utils.getTime(data.sys.sunrise);
let sunrise = document.createElement('p');
sunrise.innerHTML = `<i class="fa-solid fa-cloud-sun"></i> ${sunriseTime}`
sunrise.classList.add("sunrise", "sun");
sun.appendChild(sunrise);
//create and append sunset data
let sunsetTime = utils.getTime (data.sys.sunset);
let sunset = document.createElement('p');
sunset.innerHTML = `<i class="fa-solid fa-cloud-moon"></i> ${sunsetTime}`
sunset.classList.add("sunset", "sun");
sun.appendChild(sunset);

//create and append humidity data
let humidityBox = gridContainer.querySelector('.box3');
let humidity = document.createElement('p');
humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity}%`
humidity.classList.add("humidity");
humidityBox.appendChild(humidity);

//create and append visibility data
let visibilityBox = gridContainer.querySelector('.box4');
let visibility= document.createElement('p');
visibility.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.visibility/1000} mi`
visibility.classList.add("visibility");
visibilityBox.appendChild(visibility);

//create and append minimum temp data
let minMaxBox = gridContainer.querySelector('.box5');
let min = document.createElement('p');
min.innerHTML = `<i class="fa-solid fa-temperature-arrow-up"></i> ${Math.floor(data.main.temp_min)}°`
min.classList.add("min", "minmax");
minMaxBox.appendChild(min);
//create and append maximum data
let max = document.createElement('p');
max.innerHTML = `<i class="fa-solid fa-temperature-arrow-down"></i> ${Math.floor(data.main.temp_max)}°`
max.classList.add("max", "minmax");
minMaxBox.appendChild(max);

return gridContainer;
}
