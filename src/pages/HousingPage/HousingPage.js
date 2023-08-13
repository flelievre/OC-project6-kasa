import React from 'react';
import { useParams } from 'react-router-dom';

const HousingPage = ({
  id = '',
  title = '',
  cover = '',
  pictures = [],
  description = '',
  host: {
    name = '',
    picture = '',
  } = {},
  rating = '',
  location = '',
  equipments = [],
  tags = [],
} = {}) => {
  const {
    housingId,
  } = useParams();
  console.log(housingId);
  return (
    <h1>Housing Page</h1>
  );
};

export default HousingPage;
