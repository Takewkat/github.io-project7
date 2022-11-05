import React from "react";
import './cardPreview.scss';

interface Props {
  cover: string;
  title: string;
}

const CardPreview: React.FunctionComponent<Props> = ({cover, title}) => {
  return (
    <div className="image__container">
      <img src={cover} alt="preview" className="image__container__img" ></img>
      <div className="image__container__title">{title}</div>
    </div>
  );
}

export default CardPreview;
