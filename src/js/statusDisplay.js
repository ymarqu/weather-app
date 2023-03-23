import '../css/highlights.css'
export default function(data){
const displayBoxes = ['Feels like...', 'Wind Status', 'Sunset & Sunrise', 'Humidity', 'Visibility', 'Min & Max'];
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

displayBoxes.forEach((title, index) => {
    let box = document.createElement('div');
    box.classList.add('box',`box${index}`);
    let boxTitle = document.createElement('p');
    boxTitle.classList.add('box-title');
    boxTitle.textContent = title;
    box.appendChild(boxTitle);
    gridContainer.appendChild(box);
});


let feelsLike = gridContainer.querySelector('.box0');
let feelsLikeData = document.createElement('p');
feelsLikeData.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>  ${Math.floor(data.main.feels_like)}°`
feelsLikeData.classList.add("temp")
feelsLike.appendChild(feelsLikeData);


let windBox = gridContainer.querySelector('.box1');
let windData = document.createElement('p');
windData.innerHTML = `<i class="fa-solid fa-wind"></i>  ${data.wind.speed} mph`
windData.classList.add("wind");
windBox.appendChild(windData);

let sunriseTime = new Date(data.sys.sunrise * 1000);
let formatSunrise = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`
let sunsetTime = new Date(data.sys.sunset * 1000);
let formatSunset = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`
let sun = gridContainer.querySelector('.box2');
let sunrise = document.createElement('p');
sunrise.innerHTML = `<i class="fa-solid fa-cloud-sun"></i> ${formatSunrise} AM`
sunrise.classList.add("sunrise", "sun");
sun.appendChild(sunrise);
let sunset = document.createElement('p');
sunset.innerHTML = `<i class="fa-solid fa-cloud-moon"></i> ${formatSunset} PM`
sunset.classList.add("sunset", "sun");
sun.appendChild(sunset);


let humidityBox = gridContainer.querySelector('.box3');
let humidity = document.createElement('p');
humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity}%`
humidity.classList.add("humidity");
humidityBox.appendChild(humidity);

let visibilityBox = gridContainer.querySelector('.box4');
let visibility= document.createElement('p');
visibility.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.visibility/1000} mi`
visibility.classList.add("visibility");
visibilityBox.appendChild(visibility);

let minMaxBox = gridContainer.querySelector('.box5');
let min = document.createElement('p');
min.innerHTML = `<i class="fa-solid fa-temperature-arrow-up"></i> ${Math.floor(data.main.temp_min)}°`
min.classList.add("min", "minmax");
minMaxBox.appendChild(min);

let max = document.createElement('p');
max.innerHTML = `<i class="fa-solid fa-temperature-arrow-down"></i> ${Math.floor(data.main.temp_max)}°`
max.classList.add("max", "minmax");
minMaxBox.appendChild(max);

return gridContainer;
}
