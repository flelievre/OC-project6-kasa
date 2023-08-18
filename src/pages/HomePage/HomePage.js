import React from 'react';
import housing from '../../data/logements.json';
import HousingCard from './HomePage.components/HousingCard'
import {
  homePageTitleBg,
} from '../../assets';

const HomePage = () => {
  return (
    <>
      <div className="image-title-container">
        <div className="opacity-background" />
        <img src={homePageTitleBg} alt="sea side view"></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="housing-cards">
        {housing.map(({
          id = '', 
          title = '',
          cover = '',
        }) => (
          <HousingCard
            key={id}
            id={id} 
            title={title}
            cover={cover}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
