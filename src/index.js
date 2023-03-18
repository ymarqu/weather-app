async function getWeather(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.7174202&lon=-117.1627728&appid=84be7224f83f2b9047883638524cc4d6',
    {mode: 'cors'});
    let weatherData = await response.json();
    console.log(weatherData)

}
getWeather();
