import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';
import housing from '../../data/logements.json';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div className="housing-cards">
        {housing.map(({
          id = '', 
          title = '',
          cover = '',
        }) => (
          <ReactRouterLink
            key={id}
            to={`housing/${id}`}
            className="housing-link"
          >
            <article className="housing-article">
              <img src={cover} alt={title}></img>
              <h3 className="housing-card-title">{title}</h3>
            </article>
          </ReactRouterLink>
        ))}
      </div>
    </>
  );
};

export default HomePage;
