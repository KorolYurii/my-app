

export default function GenerateCards(props){
    if(!props.results) {
        return false;
    }
    const { results } = props;
    
    //console.log(props.results.main.temp);
    const ICON_URL = `https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`    
       
        return (  
                
            <div className="list">
                <span className="country">{results.sys.country}, </span>
                <span className="city_name">{results.name}</span> <br /> 
                <span className="description">{results.weather[0].description}</span> <br />    
                <img src={ICON_URL} alt=""/><br/>
                <span className="temp">{Math.round(props.results.main.temp)} °C</span>   <br />       
                <span className="speed">wind speed:  {results.wind.speed} m/s</span>
            </div>          
        )           
       
     
} 
// function transformContent(e) {
//     e.preventDefault();
//     document.querySelector('.list').classList.add('trans')
// }

    


 