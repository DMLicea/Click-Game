import React from "react";
import "./card.css";

function Card(props){

    return (

        <div className="card">
        
        <div className="img-container">
           
            <img
                
                alt={"placeholder"}
                src={props.image}
            
            />
            
        </div>
        
        </div>

    );

}

export default Card;
