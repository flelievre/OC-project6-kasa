import {
  starActive,
  starInactive,
} from '../../assets';
import styles from './RatingStars.module.scss';

const RatingStars = ({
  rating = 0,
}) => {
  const ratingValue = parseInt(rating);
  const fullStars = Math.floor(ratingValue);
  const emptyStars = 5 - fullStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        src={starActive}
        alt="full star"
        key={i}
      />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <img
        src={starInactive}
        alt="half star"
        key={i}
      />
    );
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default RatingStars;
