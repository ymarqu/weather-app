export default async function (){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=32.715736&lon=-117.161087&exclude=current,minutely,hourly,alerts&units=imperial&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    let weekData = await response.json();
    return weekData.list;
}
