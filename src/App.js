import React, { useState } from "react";
import Form from "./component/Form";
import CardList from "./component/CardList";

import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const removeCard = index => {
    let tmpArray = [...cards];
    tmpArray.splice(index, 1);
    setCards(tmpArray);
  };

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList removeCard={removeCard} cards={cards} />
    </div>
  );
};

export default App;
