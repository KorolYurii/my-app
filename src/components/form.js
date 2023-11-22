import { useRef, useState } from "react";
import axios from 'axios';
import GenerateHoursCards from './hoursContentCard'
import GenerateCards from "./contentCard";
import setErrorData from '../App'

const API_KEY = '4c353af824d786d3afe3b55e6a4178eb';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;
const DAYS_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&units=metric`

export default function FormHandler(props) {
    const inputRef = useRef(null)
    const [name, setName] = useState('')
        
    const onChangeCity = (e) => {        
        e.preventDefault();
        
        if(name) {            
            axios.get(BASE_URL+`&q=${name}`)
             .then(function (res) {
                props.setErrorData();
                props.setResultData(res.data) ;
                props.setHoursData()
                props.setLocation()
            }) 
            .catch(err => { 
                console.log(err); 
                props.setErrorData(err);                
            })  
            axios.get(DAYS_URL+`&q=${name}`)
            .then(function (res) {                                
                props.setDaysData(res.data);                                          
            })
            .catch(err => { 
                console.log(err); 
                props.setErrorData(err);                
            })  
                     
        }         
    }

    const onChangeCityHours = (e) => {        
        e.preventDefault();
        
        if(name) {
            
            axios.get(DAYS_URL+`&q=${name}`)
            .then(function (res) {
                props.setErrorData()                
                props.setHoursData(res.data)
                props.setLocation(res.data)                          
            })
            .catch(err => { 
                console.log(err); 
                props.setErrorData(err.response.status)
            })
            onChangeCity(e)
        }        
    }
    
    
    return(
        <form className="form" >                    
            <input 
                onChange={((event) => setName(event.target.value))}
                type="text"
                className="input_search" 
                name="search" 
                id="search" 
                ref={inputRef}      
                placeholder="Enter your City"/>
            <div className="btn_container">
                <button className="btn_search" onClick={onChangeCity}>search</button>
                <button className="btn_search"  onClick={onChangeCityHours}>search 3 hours</button>
            </div>                 
        </form>        
    )
}