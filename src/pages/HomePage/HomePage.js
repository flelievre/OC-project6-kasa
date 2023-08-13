import React from 'react';
import housing from '../../data/logements.json';
import HousingCard from './HomePage.components/HousingCard'

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
