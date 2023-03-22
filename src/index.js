
import weatherDisplay from './weatherpage.js';
let Coordinates = require('./utilities.js');

const content = document.querySelector('.content');
let cityQuery = '';

// function createForm(){
//     return `<form>
//     <input type="text" name="city" id="city">
//     <button type="submit">Search</button>
//     </form>`
//     };


// content.innerHTML = createForm();

// let form = document.querySelector('form');

// form.addEventListener('submit', async(e) => {
//     e.preventDefault();
//     let c = city.value;
//     cityQuery = c.replace(/ /g, '+');
//     console.log(cityQuery);
//     let temp = await getWeather(cityQuery);
//     console.log(temp);

// });

content.appendChild(weatherDisplay());
