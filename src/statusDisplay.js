import './css/highlights.css'
export default function(data){
const displayBoxes = ['Feels like...', 'Wind Status', 'Sunset & Sunrise', 'Humidity', 'Visibility', 'Air Quality'];
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
feelsLikeData.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>  ${Math.floor(data.main.feels_like)}°`
feelsLikeData.classList.add("temp")
feelsLike.appendChild(feelsLikeData);


let windBox = gridContainer.querySelector('.box1');
let windData = document.createElement('p');
windData.innerHTML = `<i class="fa-solid fa-wind"></i>  ${data.wind.speed} mph`
windData.classList.add("wind");
windBox.appendChild(windData);

let sunriseTime = new Date(data.sys.sunrise * 1000);
let formatSunrise = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`
let sun = gridContainer.querySelector('.box2');
let sunrise = document.createElement('p');
sunrise.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>     ${formatSunrise} AM`
sunrise.classList.add("sunrise", "sun");
// let sunset = document.createElement('p');
// windData.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>${data.wind.speed} mph`
// windData.classList.add("wind");
sun.appendChild(sunrise);

return gridContainer;
}
