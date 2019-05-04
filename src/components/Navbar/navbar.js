import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
    render() {

        return (

<nav className="navbar navbar-default navbar-fixed-top" id="catbar">

         <ul>
          <li className="left">Test Your Memory</li>
          <li className="middle"></li>
         
          <li className="right">Score: {this.props.score}</li>
        </ul>
      </nav>

);

}}

export default navbar;
