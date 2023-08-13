import React from 'react';
import {
  Navigate,
} from 'react-router-dom';
import useHousingPage from './HousingPage.logic/useHousingPage';

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
  } = useHousingPage();
  return (
    paramNotMatchingAHousing
      ? (
        <Navigate to="/error" replace />
      )
      : (
        <h1>{title}</h1>
      )
  );
};

export default HousingPage;
