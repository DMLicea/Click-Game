import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cat from "./cat.json";
import './App.css';

class App extends Component {


// this.state.cat set to cat json array

  state = {

    cat,
    
    clickedCat: [],
    
    score: 0
  
  };


imageClick = event => {

    const currentCat = event.target.alt;
    console.log(event.target.alt);
    const CatAlreadyClicked = this.state.clickedCat.indexOf(currentCat) > -1;

//if the cat is already clicked, reset

    if (CatAlreadyClicked) {

      this.setState({

        cat: this.state.cat.sort(function(a, b) {return 0.5 - Math.random();}),

        clickedCat: [],

        score: 0

      });

        alert("Oops! You lost!");

//if not cards reshuffle and you get a point

    } else {

      this.setState({

          cat: this.state.cat.sort(function(a, b) {return 0.5 - Math.random();}),

          clickedCat: this.state.clickedCat.concat(currentCat),

          score: this.state.score + 1

        },

//if all 12 clicked you get message and cards reset  

        () => {
          if (this.state.score === 6) {

            alert("You Won!");

            this.setState({

              cat: this.state.cat.sort(function(a, b) {return 0.5 - Math.random();}),
              
              clickedCat: [],
              
              score: 0

            });

          }

        }

      );

    }

  };

  

  render() {

  return (

    <div>

      <Navbar 
      
      score={this.state.score}
      
      />

      <Header />

      <Container>

          {this.state.cat.map(cat => (
            <Card
              imageClick={this.imageClick}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}

      </Container>

      <Footer />

    </div>
  
  );

}}

export default App;
