import React from "react";
import Card from "./Card.jsx";

const CardList = props => {
  return (
    <div>
      {props.cards.map((card, index) => (
        <Card
          key={index}
          removeCard={props.removeCard}
          index={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default CardList;
