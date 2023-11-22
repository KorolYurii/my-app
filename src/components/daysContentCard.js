import React from "react";

const windIcon = 'https://static-00.iconduck.com/assets.00/wind-icon-512x391-qf7yccb4.png'
const tempIcon = 'https://cdn-icons-png.flaticon.com/512/7458/7458637.png'


export default function GenerateDaysCards(props){

if (props.results) {
    
    console.log(props.results.list);
    const results = props.results.list  
          
             
            
            
        return (
            <>
            <li className='day_list_item'>                
                <span className="txt">{results[0].dt_txt.slice(0, 10)}</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {Math.round(results[0].main.temp)} °C</span><br/> 
                <img src={`https://openweathermap.org/img/wn/${results[0].weather[0].icon}@2x.png`} alt=""/><br/>
                <span className="description">{results[0].weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {results[0].wind.speed} m/s</span><br/>
            </li>
            <li className='day_list_item'>                
                <span className="txt">{results[8].dt_txt.slice(0, 10)}</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {Math.round(results[8].main.temp)} °C</span><br/> 
                <img src={`https://openweathermap.org/img/wn/${results[8].weather[0].icon}@2x.png`} alt=""/><br/>
                <span className="description">{results[8].weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {results[8].wind.speed} m/s</span><br/>
            </li>
            <li className='day_list_item'>                
                <span className="txt">{results[16].dt_txt.slice(0, 10)}</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {Math.round(results[16].main.temp)} °C</span><br/> 
                <img src={`https://openweathermap.org/img/wn/${results[16].weather[0].icon}@2x.png`} alt=""/><br/>
                <span className="description">{results[16].weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {results[16].wind.speed} m/s</span><br/>
            </li>
            <li className='day_list_item'>                
                <span className="txt">{results[24].dt_txt.slice(0, 10)}</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {Math.round(results[24].main.temp)} °C</span><br/> 
                <img src={`https://openweathermap.org/img/wn/${results[24].weather[0].icon}@2x.png`} alt=""/><br/>
                <span className="description">{results[24].weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {results[24].wind.speed} m/s</span><br/>
            </li>
            <li className='day_list_item'>                
                <span className="txt">{results[32].dt_txt.slice(0, 10)}</span><br/> <br/>
                <img className="temp_icon" src={tempIcon} alt="" />
                <span className="temp">  {Math.round(results[32].main.temp)} °C</span><br/> 
                <img src={`https://openweathermap.org/img/wn/${results[32].weather[0].icon}@2x.png`} alt=""/><br/>
                <span className="description">{results[32].weather[0].description}</span><br/> 
                <img src={windIcon} alt="" className="wind_icon" />  
                <span className="wind">  {results[32].wind.speed} m/s</span><br/>
            </li>
            
            </>
        );
       
        
    
    return(
        results
    )
}
}