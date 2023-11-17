//import GenerateDaysCards from "./form";
//import { logDOM } from "@testing-library/react";
import React from "react";
 //import App from "../App"
// import { ReactDOM } from "react";
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function GenerateDaysCards(props){

if (props?.resultData?.list) {
    const results = props.resultData.list.map((el, index) => {        
        const ICON_DAY_URL = `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`  
            let dateList = new Date(el.dt_txt);
            let dateNumber = dateList.getDay();
        return (
            <li className='day_list_item' key={index} >
                <span className="days">{days[dateNumber]}, </span><br/> 
                <span className="txt">{el.dt_txt},</span><br/> 
                <span className="temp">{el.main.temp} °C</span><br/> 
                <img src={ICON_DAY_URL} alt=""/><br/>
                <span className="description">{el.weather[0].description}</span><br/>   
                <span className="wind">{el.wind.speed} m/s</span><br/>
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
