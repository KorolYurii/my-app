//import React from "react";
import App from "../App"
import { ReactDOM } from "react";


export default function GenerateCards(results){
   // const ICON_URL = `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`
    
    console.log(results);
    return (
        <div>
            <span className="country">${results.sys.country},</span>
            <span className="city_name">${results.name}</span> <br /> 
            <span className="description">${results.weather[0].description}</span> <br />    
            
            <span className="temp">${results.main.temp} °C</span>          
            <span className="speed">wind speed:  ${results.wind.speed} m/s</span>
        </div>
        
    )
          
}
 
 const cardsContent = document.getElementById('content');
 ReactDOM.createRoot(cardsContent).render(App);
// root.render(React.createElement(App))
 