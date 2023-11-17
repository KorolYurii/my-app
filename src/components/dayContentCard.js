import React from "react";

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const windIcon = 'https://static-00.iconduck.com/assets.00/wind-icon-512x391-qf7yccb4.png'
const tempIcon = 'https://cdn-icons-png.flaticon.com/512/7458/7458637.png'
export default function GenerateDaysCards(props){

if (props?.resultData?.list) {
    console.log(props?.resultData);
    const results = props.resultData.list.map((el, index) => {        
        const ICON_DAY_URL = `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`  
            let dateList = new Date(el.dt_txt);
            let dateNumber = dateList.getDay();
        return (
            <li className='day_list_item' key={index} >
                <span className="days">{days[dateNumber]}, </span><br/> 
                <span className="txt">{el.dt_txt},</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {el.main.temp} °C</span><br/> 
                <img src={ICON_DAY_URL} alt=""/><br/>
                <span className="description">{el.weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {el.wind.speed} m/s</span><br/>
            </li>
        );
       
    })
    return(
        results
    )
}
    
}


 
   



   

    // return(
    //     <ul className="day_list">
    //         {resultData.list.map((el, index) => {
    //             return (
    //                 <li className='day_list_item' key={index} >
    //                     {/* <span className="days">{days[dateNumber]},</span><br/>  */}
    //                     <span className="txt">{el.dt_txt},</span><br/> 
    //                     <span className="temp">{el.main.temp} °C</span><br/> 
    //                     {/* <img src={ICON_DAY_URL} /><br/> */}
    //                     <span className="description">{el.weather[0].description}</span><br/>   
    //                     <span className="wind">{el.wind.speed} m/s</span><br/>
    //                 </li>
    //             );
    //         })}
           
    //     </ul>
    // )



    // resultData.list.forEach(el => {
    //     const ICON_DAY_URL = `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`

    //     let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    //       let dateList = new Date(el.dt_txt);
    //       let dateNumber = dateList.getDay();
   
    //     <li class='day_list_item'>
    //         <span class="days">${days[dateNumber]},</span></br> 
    //         <span class="txt">${el.dt_txt},</span></br> 
    //         <span class="temp">${el.main.temp} °C</span></br> 
    //         <img src="${ICON_DAY_URL}" ></br
    //         <span class="description">${el.weather[0].description}</span></br>   
    //         <span class="wind">${el.wind.speed} m/s</span></br>
    //     </li>`
        
        
    // })
