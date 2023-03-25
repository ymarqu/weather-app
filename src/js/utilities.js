//async fucntion - fetch and wait city coordinates for the city inputted by the user
// using the geolocation api to then use in the open weather api
// if the city name is valid error is thrown and displayed
async function getCoordinates(cityName){
  try{
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},{us}&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    let coordinates = await response.json();
    return [coordinates[0].lat, coordinates[0].lon]
  }catch(e){throw new Error("oops... This location is no where to be found. :( Please try again! ¯\\_(ツ)_/¯")};
}

//utility function to get time based on input and outputs time time to display to user formatted: HH:MM AM/PM
function getTime(time){
  let currentTime = new Date(time * 1000);
  let standardHour = currentTime.getHours() % 12;
  let hour = standardHour === 0 ? 12 : standardHour;
  let phase = currentTime.getHours() > 12 ? 'PM' : 'AM';
  let minutes = currentTime.getMinutes() < 10 ? currentTime.getMinutes() + '0' : currentTime.getMinutes();
  return `${hour}:${minutes} ${phase}`;
}

export{
  getCoordinates,
  getTime
}
