let utils = require('./utilities.js')



async function getWeather(){
    // let coordinates = await utils.getCoordinates(cityName)
    // let latitude = coordinates[0];
    // let longitude = coordinates[1];
    // console.log(coordinates)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=32.715736&lon=-117.161087&units=imperial&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    console.log(response)
    let weatherData = await response.json();
    console.log(weatherData);
    return weatherData;

}


export default getWeather;
