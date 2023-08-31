import React, {
  useState,
} from 'react';
import {
  Navigate,
} from 'react-router-dom';
import useHousingPage from './HousingPage.logic/useHousingPage';
import styles from './HousingPage.module.scss';
import {
  arrow,
} from '../../assets';
import {
  RatingStars,
  Accordion,
} from '../../components';

const HousingPage = () => {
  const {
    id = '',
    title = '',
    cover = '',
    pictures = [],
    description = '',
    hostName = '',
    hostPicture = '',
    rating = '',
    location = '',
    equipments = [],
    tags = [],
    paramNotMatchingAHousing = true,
    hasMoreThanOnePicture = false,
    currentPictureIndex = 0,
    pictureIndicator = '1/1',
    handleNextClick = () => {},
    handlePreviousClick = () => {},
    isShowingFirst = true,
    isShowingLast = false,
  } = useHousingPage();
  return (
    paramNotMatchingAHousing
      ? (
        <Navigate to="/error" replace />
      )
      : (
        <>
          <div className={styles.coverContainer}>
            <img
              className={styles.coverContainerImage}
              src={pictures[currentPictureIndex]}
              alt={title}
            />
            {hasMoreThanOnePicture && (
              <>
                <img
                  src={arrow}
                  alt="previous button"
                  className={`${isShowingFirst ? 'hidden ' : ''}${styles.coverContainerPrevArrow}`}
                  onClick={handlePreviousClick}
                />
                <img
                  src={arrow}
                  className={`${isShowingLast ? 'hidden ' : ''}${styles.coverContainerNextArrow}`}
                  alt="next button"
                  onClick={handleNextClick}
                />
                <span className={styles.carouselIndicator}>{pictureIndicator}</span>
              </>
            )}
          </div>
          <section className={styles.detailsContainer}>
            <div className={styles.infos}>
              <h1>{title}</h1>
              <h2>{location}</h2>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.host}>
              <div className={styles.hostInfos}>
                <span className={styles.hostName}>
                  {hostName}
                </span>
                <img src={hostPicture} alt={hostName} />
              </div>
              <RatingStars rating={rating} />
            </div>
          </section>
          <section className={styles.descriptionEquipmentsContainer}>
            <Accordion
              title="Description"
            >
              {description}
            </Accordion>
            <Accordion
              title="Équipements"
            >
              {equipments.map((equipment) => (
                <div key={equipment}>
                  {equipment}
                </div>
              ))}
            </Accordion>
          </section>
        </>
      )
  );
};

export default HousingPage;
