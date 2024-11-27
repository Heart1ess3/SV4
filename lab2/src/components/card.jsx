import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button, Box, Card, CardContent, Typography, TextField } from "@mui/material";

function ItemCard({ item, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Popup
        trigger={
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="div">
                {editedItem.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {editedItem.description}
              </Typography>
            </CardContent>
          </Card>
        }
        modal
        nested
        contentStyle={popupContentStyle}
        overlayStyle={overlayStyle}
        closeOnDocumentClick={true}
      >
        {(close) => (
          <Box sx={popupStyle}>
            {!isEditing ? (
              <>
                <Typography variant="h4">{editedItem.name}</Typography>
                <Typography>{editedItem.description}</Typography>
                <Typography>Full description:</Typography>
                <Typography>{editedItem.fullDescription}</Typography>
              </>
            ) : (
              <Box>
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={editedItem.name}
                  onChange={handleEditChange}
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  name="description"
                  value={editedItem.description}
                  onChange={handleEditChange}
                  fullWidth
                  multiline
                  rows={3}
                  sx={{ marginBottom: "10px" }}
                />
                <TextField
                  label="Full Description"
                  variant="outlined"
                  name="fullDescription"
                  value={editedItem.fullDescription}
                  onChange={handleEditChange}
                  fullWidth
                  multiline
                  rows={3}
                />
              </Box>
            )}
            <Box sx={{ marginTop: "20px" }}>
              {!isEditing ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsEditing(true)}
                    sx={muiButtonStyle}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      onDelete(item.id);
                      close();
                    }}
                    sx={muiButtonStyle}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                    sx={muiButtonStyle}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setIsEditing(false)}
                    sx={muiButtonStyle}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={close}
              sx={{ marginTop: "10px" }}
            >
              Close
            </Button>
          </Box>
        )}
      </Popup>
    </>
  );
}

export default ItemCard;

const cardStyle = {
  width: "200px",
  margin: "10px",
  cursor: "pointer",
};

const popupStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  textAlign: "center",
  width: "100%",
};

const popupContentStyle = {
  borderRadius: "10px",
  padding: "20px",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease-in-out",
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const muiButtonStyle = {
  marginRight: "10px",
  marginTop: "10px",
};
