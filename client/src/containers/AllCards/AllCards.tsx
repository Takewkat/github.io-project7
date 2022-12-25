import CardPreview from "../../components/CardInfo/CardPreview";
import "./allcards.scss";

import * as APIService from "../../services/cardAPI";
import { useEffect, useState } from "react";
import { ICardList } from "../../models/CardModel";

import ErrorMessage from "../ErrorsMessage";

function AllCards() {
  const [cards, setCards] = useState<ICardList>([]);

  useEffect(() => {
    APIService.getCards().then((cards) => setCards(cards));
  }, []);

  return (
    <section className="allcards">
      <div className="allcards__grid">
        {cards ? (
          cards.map((card) => <CardPreview key={card.id} cover={card.cover} title={card.title} id={card.id} />)
        ) : (
          <ErrorMessage message="Desolé, nous n'avons pas pu charger les logements. Veuillez réeessayer plus tard" />
        )}
      </div>
    </section>
  );
}

export default AllCards;
