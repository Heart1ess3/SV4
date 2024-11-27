import { useState, useEffect } from "react";
import data from "../data/data.json"
import CardsList from "../components/cardsList";
import Button from "../components/button";

  const CardsPage = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      setCards(data)
    }, [])

    const handleDelete = (id) => {
      setCards(cards.filter((card) => card.id !== id));
    };

    const handleAddCard = () => {
      const newCard = {
        id: cards.length + 1,
        name: `Item ${cards.length + 1}`,
        description: `Description for Item ${cards.length + 1}`,
      };
      setCards((prevCards) => [...prevCards, newCard]);
    };

    return (
      <div style={{ padding: '20px' }}>
        <h1>Card Gallery</h1>
        <Button text={"Add Card"} onClick={handleAddCard} style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}></Button>
        <CardsList cards={cards} onDelete={handleDelete}></CardsList>
      </div>
    );
  };

  export default CardsPage;