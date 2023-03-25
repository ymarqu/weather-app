let utils = require('./utilities.js')

//Async function calls the getcoodinated function with city name passed
// if error is returned from getcoordinated openweather api is not called and
//error is thrown to be displayed. If valid coordinates are found this function returns
//data from open weather api to be displayed.
async function getWeather(cityName){
    try{
    let coordinates = await utils.getCoordinates(cityName)
    let latitude = coordinates[0];
    let longitude = coordinates[1];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    let weatherData = await response.json();
    return weatherData;
    }catch(e){throw new Error("oops... This location is no where to be found. Please try again! ¯\\_(ツ)_/¯")}
}


export default getWeather;
