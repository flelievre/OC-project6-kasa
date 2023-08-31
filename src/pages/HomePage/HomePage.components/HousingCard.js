import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import styles from './HousingCard.module.scss';

const HousingCard = ({
  id = '',
  title = '',
  cover = '',
}) => (
  <ReactRouterLink
    to={`housing/${id}`}
    className={styles.housingLink}
  >
    <article className={styles.housingArticle}>
      <div className={styles.housingLinearGradient} />
      <img src={cover} alt={title}></img>
      <h2>{title}</h2>
    </article>
  </ReactRouterLink>
);

export default HousingCard;
