import { useState, useEffect } from "react";
import data from "../data/data.json";
import CardsList from "../components/cardsList";
import { Button, Typography, TextField } from "@mui/material";
import Popup from "reactjs-popup";
import { Box } from '@mui/material';
import 'reactjs-popup/dist/index.css';

const CardsPage = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ name: "", description: "", fullDescription: "" });
  const [errors, setErrors] = useState({ name: false, description: false, fullDescription: false });

  useEffect(() => {
    setCards(data);
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleAddCard = () => {
    const hasErrors = validateForm();

    if (!hasErrors) {
      const cardToAdd = {
        id: cards.length + 1,
        name: newCard.name,
        description: newCard.description,
        fullDescription: newCard.fullDescription,
      };
      setCards((prevCards) => [...prevCards, cardToAdd]);
      setNewCard({ name: "", description: "", fullDescription: "" });
      setErrors({ name: false, description: false, fullDescription: false });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateForm = () => {
    const newErrors = {
      name: newCard.name.trim() === "",
      description: newCard.description.trim() === "",
      fullDescription: newCard.fullDescription.trim() === ""
    };

    setErrors(newErrors);

    return Object.values(newErrors).some(error => error);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography
        variant="h1"
        sx={{ fontSize: '32px', marginBottom: '20px' }}
      >
        Card Gallery
      </Typography>
      <Popup trigger={
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: '20px', padding: '10px' }}
        >
          Add Card
        </Button>
      } modal>
        {close => (
          <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
              Add New Card
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Card Name"
              type="text"
              fullWidth
              variant="outlined"
              value={newCard.name}
              onChange={handleInputChange}
              error={errors.name}
              helperText={errors.name ? "Name is required" : ""}
            />
            <TextField
              margin="dense"
              name="description"
              label="Card Description"
              type="text"
              fullWidth
              variant="outlined"
              value={newCard.description}
              onChange={handleInputChange}
              error={errors.description}
              helperText={errors.description ? "Description is required" : ""}
            />
            <TextField
              margin="dense"
              name="fullDescription"
              label="Full Description"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={newCard.fullDescription}
              onChange={handleInputChange}
              error={errors.fullDescription}
              helperText={errors.fullDescription ? "Full description is required" : ""}
            />
            <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={close} color="primary">
                Cancel
              </Button>
              <Button onClick={() => { if (!validateForm()) { handleAddCard(); close(); } }} color="primary">
                Add
              </Button>
            </Box>
          </Box>
        )}
      </Popup>

      <CardsList cards={cards} onDelete={handleDelete} />
    </Box>
  );
};

export default CardsPage;
