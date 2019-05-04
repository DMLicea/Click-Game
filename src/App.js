import React from 'react';

import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cat from "./cat.json";

import './App.css';

function App() {

  return (

    <div>

      <Navbar />

      <Header />

      <Container>

      <Card 

        image={cat[0].image}
      
      />

      <Card 

      image={cat[1].image}

      />

    <Card 

    image={cat[2].image}

    />

    <Card 

    image={cat[3].image}

    />

    <Card 

    image={cat[4].image}
      
    />

    <Card 

    image={cat[5].image}

    />

      </Container>

      <Footer />

    </div>
  
  );
}

export default App;
