import React, { useState } from "react";
import Card from "./card";
import { Box, TextField } from "@mui/material";

function CardsList({ cards, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Search by Name or Description"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredCards.map((item) => (
          <Card key={item.id} item={item} onDelete={onDelete} />
        ))}
      </Box>
    </Box>
  );
}

export default CardsList;
