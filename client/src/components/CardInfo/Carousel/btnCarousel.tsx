import React from "react";
import "./carousel.scss";
import leftArrow from "./leftArrow.svg";
import rightArrow from "./rightArrow.svg";

interface Props {
  moveSlide: () => void;
  direction: string;
}

const BtnCarousel: React.FunctionComponent<Props> = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "carousel__next" ? "carousel__btn carousel__next" : "carousel__btn carousel__prev"}
    >
      <img src={direction === "carousel__next" ? rightArrow : leftArrow} alt='arrow'/>
    </button>
  );
}

export default BtnCarousel;