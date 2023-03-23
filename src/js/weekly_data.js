

export default async function (){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=32.715736&lon=-117.161087&units=imperial&appid=84be7224f83f2b9047883638524cc4d6`,
    {mode: 'cors'});
    console.log(response);
    let weekData = await response.json();
    console.log(weekData);
    dailyAverage(weekData.list);
    return weekData;
}

function dailyAverage(week){
    console.log(week);
    week.forEach(day => {
        let date = new Date(day.dt * 1000).getDate();
        console.log(date);

        // console.log(day)
    });
}
