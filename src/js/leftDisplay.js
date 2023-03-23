export default function(data){
    let currentDate = new Date(data.dt * 1000)
    let date = currentDate.toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"});
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    return `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' width='200' height='200'>
    <h1>${Math.floor(data.main.temp)}°</h1>
    <div class="zone-container">
    <p class="date">${date}, </p>
    <p class="time">${time}</p>
    </div>
    <p><i class="fa-solid fa-cloud"></i> Cloud Percentage: ${data.clouds.all}%</p>
    <p>${data.weather[0].description}</p>
    <p>${data.name}, CA</p>`
}
