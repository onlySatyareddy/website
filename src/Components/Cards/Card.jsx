import React, { useState } from "react";
import card1 from "../assets/img/card_1.jpg";
import card2 from "../assets/img/card_2.jpg";
import card3 from "../assets/img/card_3.jpg";
import card4 from "../assets/img/card_4.jpg";
import './Card.css'
const CountryCards = () => {
  const countries = ["Paris", "Bangkok", "Indonesia", "Malaysia"];
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <Card cardImg={card1} countryName={countries[0]} />
        </div>
        <div className="col-md-3">
          <Card cardImg={card2} countryName={countries[1]} />
        </div>
        <div className="col-md-3">
          <Card cardImg={card3} countryName={countries[2]} />
        </div>
        <div className="col-md-3">
          <Card cardImg={card4} countryName={countries[3]} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ cardImg, countryName }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <img
        src={cardImg}
        alt={`Card for ${countryName}`}
        className="card-image"
        style={{ filter: isHovered ? "brightness(125%)" : "brightness(90%)" }}
      />
      <p>{countryName}</p>
      {isHovered && <div className="border-animation-bottom-right"></div>}
      {isHovered && <div className="border-animation-left-right"></div>}
    

    </div>
  );
};

export default CountryCards;
