import "./carousel.scss";
import leftArrow from "./leftArrow.svg";
import rightArrow from "./rightArrow.svg";

interface Props {
  moveSlide: () => void;
  direction: string;
}

function BtnCarousel ({ 
  direction, 
  moveSlide 
}: Props){
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