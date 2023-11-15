

export default function GenerateDaysCards(resultData){
    console.log(resultData);  
    let html = `<ul class="day_list">`

    resultData.list.forEach(el => {
        const ICON_DAY_URL = `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ];
          let dateList = new Date(el.dt_txt);
          let dateNumber = dateList.getDay();
        console.log(days[dateNumber]);
      

        html = html + `
        <li class='day_list_item'>
            <span class="days">${days[dateNumber]},</span></br> 
            <span class="txt">${el.dt_txt},</span></br> 
            <span class="temp">${el.main.temp} °C</span></br> 
            <img src="${ICON_DAY_URL}" ></br
            <span class="description">${el.weather[0].description}</span></br>   
            <span class="wind">${el.wind.speed} m/s</span></br>
        </li>`
        
        
    })
    html = html + '</ul>'
    document.getElementById('day_content').innerHTML = html;    
}