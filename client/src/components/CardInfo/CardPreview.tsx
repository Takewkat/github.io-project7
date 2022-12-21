import { Link } from 'react-router-dom';
import './cardPreview.scss';

interface Props {
  cover: string;
  title: string;
  id: string;
}

function CardPreview ({
  cover, 
  title, 
  id
}: Props) {

  return (
    <Link to={`/logement/${id}`}>
      <div className="image__container">
        <img src={cover} alt="preview" className="image__container__img" ></img>
        <div className="image__container__title">{title}</div>
      </div>
    </Link>
  );
}

export default CardPreview;
