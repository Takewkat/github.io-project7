import React from "react";
import CardPreview from "../../components/CardInfo/CardPreview";
import './allcards.scss';
import cards from '../../services/logements.json';

// Step 1: Load the data from the json file

//TO DO
// Step 2: + Loader (spinner) + Error message
// Step 3: Lazy loading

const AllCards: React.FunctionComponent = () => {
  return (
    <main className="allcards _container">
      <div className="allcards__grid">
        {cards.map((card) => (
          <CardPreview
            key={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </div>
    </main>
  );
}

export default AllCards;