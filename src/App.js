import "./App.css";

import "mdbootstrap/css/mdb.css";

import Navbar from "./Navbar/Navbar.jsx";
import Landing from "./LandinPage/Landing.jsx";
import Card from "./Components/Cards/Card.jsx";

import Footer from "./Components/Footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing/>
      <Card />
     
     <Footer/>
    </React.Fragment>
    
  );
}

export default App;
