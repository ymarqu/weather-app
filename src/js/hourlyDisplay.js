import '../css/hourlyDisplay.css'
import  getData from './hourly_data.js'
export default function(){
    let response = {};
    let res = [];
    let hourlyContainer = document.createElement('div');
    hourlyContainer.classList.add("hour");

    (async () => {
        response = await getData();
        console.log(response)
        for(let i = 0; i < 4; i++){
            let singlehour = document.createElement('div');
            let d = new Date(response[i].dt * 1000);
            let date = `${d.getHours() % 12}:${d.getMinutes()}0 ${d.getHours() > 12 ? 'PM' : 'AM'}`
            let time = document.createElement('p');
            time.innerHTML = date;
            singlehour.appendChild(time);
            let image = document.createElement('img');
            image.src = `https://openweathermap.org/img/wn/${response[i].weather[0].icon}.png`
            singlehour.appendChild(image);
            let temp = document.createElement('p');
            temp.innerHTML = `${Math.floor(response[i].main.temp)}°`
            temp.classList.add('hour-temp');
            singlehour.appendChild(temp);

            singlehour.classList.add('single-hour');
            hourlyContainer.appendChild(singlehour);
        }
    })()
    console.log(`this is the data${response}`)
    console.log(res);
    // async function callFunction(){
    //     let response = await getData()
    //     return response;
    // }
    // let data = callFunction();
    // console.log(data)
    // getData().then(x => {
    //     response = x;
    // }).catch(e => {console.log(e)})
    // console.log(response);
    // getData().then(response => response.json()).then(res => console.log(res));
    // console.log(data);



    return hourlyContainer;

}
