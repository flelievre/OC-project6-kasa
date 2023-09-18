import React, {
  useContext,
} from 'react';
import housing from '../../data/logements.json';
import HousingCard from './HomePage.components/HousingCard'
import {
  homePageTitleBg,
} from '../../assets';
import {
  ImageHeader,
} from '../../components';
import styles from './HomePage.module.scss';

const NB_DISPLAYED_HOUSINGS = 20;

const HomePage = () => (
  <>
    <ImageHeader
      title="Chez vous, partout et ailleurs"
      imgSrc={homePageTitleBg}
      imgAlt="sea side view"
    />
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

export default HomePage;
