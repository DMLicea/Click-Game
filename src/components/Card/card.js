import React from "react";
import "./card.css";

const Card = props => (

    <div className="card" onClick={props.imageClick}>

      <div className="img">

        <img 
        
         
        src={props.image} 
        alt={props.id}/>
        
      </div>

    </div>
    
  );

export default Card;
