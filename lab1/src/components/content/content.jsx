import { Component } from "react";
import CardsList from "../cardsList/cardsList";
import cardsData from "../../constants/cardsData"
class Content extends Component {
  render() {
    return (
      <section style={{ padding: '20px', backgroundColor: '#f4f4f4'}}>
        <CardsList cards={cardsData}></CardsList>
      </section>
    );
  }
}

export default Content;