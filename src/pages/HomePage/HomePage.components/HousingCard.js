import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

const HousingCard = ({
  id = '',
  title = '',
  cover = '',
}) => (
  <ReactRouterLink
    to={`housing/${id}`}
    className="housing-link"
  >
    <article className="housing-article">
      <div className="linear-gradient" />
      <img src={cover} alt={title}></img>
      <h3 className="housing-card-title">{title}</h3>
    </article>
  </ReactRouterLink>
);

export default HousingCard;
