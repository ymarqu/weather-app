export default function(data){
    let currentDate = new Date(data.dt * 1000)
    let date = currentDate.toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"});
    let time = `${currentDate.getHours() % 12 }:${currentDate.getMinutes()} ${currentDate.getHours() > 12 ? 'PM' : 'AM'}`
    return `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' width='200' height='200'>
    <h1>${Math.floor(data.main.temp)}°</h1>
    <div class="zone-container">
    <p class="date"><i class="fa-regular fa-calendar-days"></i> ${date}</p>
    <p class="time"><i class="fa-regular fa-clock"></i> ${time}</p>
    </div>
    <p class="cloud-percent"><i class="fa-solid fa-cloud"></i> Cloud Percentage: ${data.clouds.all}%</p>
    <p class="weather-desc">${data.weather[0].description}</p>
    <p>${data.name}, CA</p>`
}
