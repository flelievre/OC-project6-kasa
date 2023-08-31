import React from 'react';
import housing from '../../data/logements.json';
import HousingCard from './HomePage.components/HousingCard'
import {
  homePageTitleBg,
} from '../../assets';
import styles from './HomePage.module.scss';

const NB_DISPLAYED_HOUSINGS = 20;

const HomePage = () => {
  return (
    <>
      <div className={styles.imageTitleContainer}>
        <div className={styles.opacityBg} />
        <img src={homePageTitleBg} alt="sea side view"></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.housingCards}>
        {housing.map(({
          id = '', 
          title = '',
          cover = '',
        }, index) => index < NB_DISPLAYED_HOUSINGS
          ? (
            <HousingCard
              key={id}
              id={id} 
              title={title}
              cover={cover}
            />
          )
          : <></>
        )
      }
      </div>
    </>
  );
};

export default HomePage;
