import {useState} from 'react'
import './carousel.scss';
import BtnCarousel from './btnCarousel';

interface Props {
  pictures: string[];
}

function Carousel({ 
  pictures 
}: Props){

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== pictures.length){
      setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === pictures.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
      setSlideIndex(pictures.length)
    }
  }

  return (
    <div className="carousel">
      {pictures.map(( src: string, index: number) => {
        return (
          <div
          key={src} 
          className={slideIndex === index + 1 ? "carousel__slide active-anim" : "carousel__slide"}
          >
            <img src={src} alt='pictures'/>
          </div>
        )
      })}
      {
        pictures.length > 1 && 
          <>
            <BtnCarousel moveSlide={nextSlide} direction={"carousel__next"} />
            <BtnCarousel moveSlide={prevSlide} direction={"carousel__prev"}/>
            <div className="carousel__numbers">
              {slideIndex}/{pictures.length}
            </div>
          </>
      }
    </div>
  )
}

export default Carousel;