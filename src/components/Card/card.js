import React from "react";
import "./card.css";

function Card(props){

    return (

        <div className="card">
        
        <div className="img">
           
            <img
                
                alt={"placeholder"}
                src={props.image}
            
            />

        </div>
        
        </div>

    );

}

export default Card;
