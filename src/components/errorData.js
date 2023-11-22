import React from "react";

export default function Error (props) {
    //console.log(props);
    if(!props?.resultData){        
        return false;
    }
        return(
            <p className="error">City not found</p> 
        )
}