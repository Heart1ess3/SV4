import React from "react";
import Card from "./card";

function CardsList({cards, onDelete}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((item) => (
        <Card key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default CardsList;
