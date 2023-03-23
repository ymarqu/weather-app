async function getCoordinates(cityName){
  console.log(cityName)
  try{
  let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=84be7224f83f2b9047883638524cc4d6`,
  {mode: 'cors'});
  let coordinates = await response.json();
  return [coordinates[0].lat, coordinates[0].lon]
  }catch(e){console.log(e)}
}


export{
  getCoordinates
}
