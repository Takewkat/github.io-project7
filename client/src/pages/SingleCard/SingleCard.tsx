import Title from "../../components/Header/Title";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './singlecard.scss';

import { useParams } from "react-router-dom";
import * as APIService from "../../services/cardAPI";
import { useEffect, useState } from "react";
import { ICard } from "../../models/CardModel";

import Carousel from "../../components/CardInfo/Carousel/Carousel";
import NotFound from "../404/NotFound";
import Accordion from "../../components/CardInfo/Dropdown/Accordion";

const SingleCard: React.FunctionComponent = () => {

  const { id } = useParams();
  const [card, setCard] = useState<ICard | undefined>();

  useEffect(() => {
    APIService.getCardById(id!).then(card => setCard(card));
  }, [id]);

  return (
    card 
    ? <>
        <Title title={card.title} />
        <Header />
          <main className="_container">      
            Page Set Up 
            <Carousel pictures={card.pictures} />
            <div className="card__accordion">
              <Accordion title="Description" text={card.description} />
              <Accordion title="Équipements" text={card.equipments} />
            </div>
          </main>
        <Footer />
      </>
    : <NotFound />
  );
};

export default SingleCard;