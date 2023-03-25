let utils = require('./utilities.js')



async function getWeather(cityName){
    let weatherData;
    let coordinates;
    try{
    coordinates = await utils.getCoordinates(cityName)
    let latitude = coordinates[0];
    let longitude = coordinates[1];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    weatherData = await response.json();
    return weatherData;
    }catch(e){throw new Error("oops... This location is no where to be found. :( Please try again! ¯\\_(ツ)_/¯")}


}


export default getWeather;
