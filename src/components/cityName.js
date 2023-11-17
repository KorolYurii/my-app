import React from "react";

export default function CityName (props) {
    if(props?.resultData?.list){
        console.log(props?.resultData);
        return(
            <div className="location_wrapper">
                <span className="country_name">{props?.resultData?.city.country}, </span>
                <span className="city_name">{props?.resultData?.city.name}</span>    
            </div>
           
        )
    }

   
}