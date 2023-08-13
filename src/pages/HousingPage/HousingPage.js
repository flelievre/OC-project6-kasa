import React from 'react';
import useHousingPage from './HousingPage.logic/useHousingPage';

const HousingPage = () => {
  const {
    id,
    title,
    cover,
    pictures,
    description,
    hostName,
    hostPicture,
    rating,
    location,
    equipments,
    tags,
  } = useHousingPage();
  return (
    <h1>{title}</h1>
  );
};

export default HousingPage;
