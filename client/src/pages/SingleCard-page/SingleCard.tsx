import Title from "../../components/Header/Title";
import './singlecard.scss';

import { useParams } from "react-router-dom";
import * as APIService from "../../services/cardAPI";
import { useEffect, useState } from "react";
import { ICard } from "../../models/CardModel";

import Carousel from "../../components/CardInfo/Slideshow/Carousel";
import Accordion from "../../components/Dropdown/Accordion";
import Loader from "../../containers/Loader/Loader";
import Tag from "../../components/CardInfo/Tag";
import TitleLocation from "../../components/CardInfo/TitleLocation";
import Host from "../../components/CardInfo/Host";
import Rating from "../../components/CardInfo/Rating/Rating";

function SingleCard () {

  const { id } = useParams();
  const [card, setCard] = useState<ICard | undefined>();

  useEffect(() => {
    APIService.getCardById(id!).then(card => setCard(card));
  }, [id]);

  return (
    card 
    ? <>
        <Title title={card.title} />
        <main className="_container">
          <Carousel pictures={card.pictures} />
          <section className="card__info">
            <div className="card__info__titlelocation">
              <TitleLocation title={card.title} location={card.location} />
            </div>
            <div className="card__info__tags">
              { card.tags &&
                card.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))
              }
            </div>
            <div className="card__info__host">
              <Host name={card.host.name} picture={card.host.picture} />
            </div>
              <Rating starsSelected={card.rating} />
          </section>
          <section className="card__accordion">
            <Accordion title="Description" children={card.description} cardStyle />
            <Accordion title="Équipements" children={card.equipments} cardStyle />
          </section>
        </main>
      </>
    : <Loader />
  );
};

export default SingleCard;