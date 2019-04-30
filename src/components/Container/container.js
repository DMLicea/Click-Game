import React from "react";
import "./container.css";

function Container(props) {

    return <div className="wrapper">{props.children}</div>;

}

export default Container;
