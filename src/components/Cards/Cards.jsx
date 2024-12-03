import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import data from "../../data.json";
import i18n from "../../i18n";
import { setFilter } from "../../slices/filterSlice"; 

function Cards() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter); 
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setCards(data);
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleEdit = (id) => {
    const updatedTitle = prompt(t("newTitle"));
    const updatedDescription = prompt(t("newDescription"));

    if (updatedTitle && updatedDescription) {
      setCards(
        cards.map((card) =>
          card.id === id
            ? { ...card, title: updatedTitle, description: updatedDescription }
            : card
        )
      );
    }
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value)); 
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const filteredCards = cards
    .filter((card) => card.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOrder === "asc"
        ? titleA < titleB
          ? -1
          : 1
        : titleA > titleB
        ? -1
        : 1;
    });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {t("title")}
      </Typography>

      <div>
        <Button onClick={() => handleLanguageChange("en")}>EN</Button>
        <Button onClick={() => handleLanguageChange("ru")}>RU</Button>
      </div>

      <TextField
        label={t("filter")}
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label={t("sortOrder")}
        variant="outlined"
        value={sortOrder}
        onChange={handleSortChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="asc">{t("ascending")}</MenuItem>
        <MenuItem value="desc">{t("descending")}</MenuItem>
      </TextField>
      <Grid2 container spacing={4}>
        {filteredCards.map((card) => (
          <Grid2 item key={card.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" src={card.image} title={card.title} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleDelete(card.id)}
                >
                  {t("delete")}
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleEdit(card.id)}
                >
                  {t("edit")}
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Cards;