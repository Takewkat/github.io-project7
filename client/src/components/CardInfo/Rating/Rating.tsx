import { useState } from 'react';
import Star from './Star';
import './rating.scss';

interface Props {
  starsSelected: number;
  totalStars?: number;
}

function Rating({
  starsSelected,
  totalStars=5,
}: Props) {
  const [stars, setStars] = useState(starsSelected);
  return (
    <div className="star-rating" onMouseLeave={() => setStars(starsSelected)}>    
      {[...Array(totalStars).fill(0)].map((_, i) =>
        <Star key={i}
          selected={i < stars}
          onMouseEnter={() => setStars(i + 1)}
        />
      )}
    </div>
  );
}

export default Rating;