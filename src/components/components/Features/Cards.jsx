import React from "react";
import "./card.css";

const Cards = (props) => {
  return (
    <div className="featureCard">
      <div>
        <img className="cardImg" src={props.img} alt="" />
      </div>
      <div>
        <h3 className="cardH3" style={{ color: "#fff" }}>
          {props.name}
        </h3>
        <p className="cardText">{props.text}</p>
      </div>
    </div>
  );
};

export default Cards;
