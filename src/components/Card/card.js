import React from "react";
import "./card.css";

const Card = props => (

    <div className="card" onClick={props.imageClick}>

      <div className="img">

        <img 
        
        alt={"placeholder"}
         
        src={props.image} />
        
      </div>

    </div>
    
  );

export default Card;
