import weatherDisplay from './weatherpage.js';
//Append Main weather display to content in index.html
const content = document.querySelector('.content');
content.appendChild(weatherDisplay());
