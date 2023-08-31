import {
  useState,
} from 'react';
import {
  useParams,
} from 'react-router-dom';
import housing from '../../../data/logements.json';

const useHousingPage = () => {
  const {
    housingId,
  } = useParams();

  const matchingHousings = housing.filter(({ id: dataHousingId }) => (
    (dataHousingId === housingId)
  ));

  const paramNotMatchingAHousing = (matchingHousings.length === 0);

  const {
    id = '',
    title = '',
    cover = '',
    pictures = [],
    description = '',
    host: {
      name: hostName = '',
      picture: hostPicture = '',
    } = {},
    rating = '',
    location = '',
    equipments = [],
    tags = [],
  } = paramNotMatchingAHousing
    ? {}
    : matchingHousings[0];

  const hasMoreThanOnePicture = (pictures.length > 1);

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const pictureIndicator = `${currentPictureIndex + 1}/${pictures.length}`;

  const handleNextClick = () => {
    if (currentPictureIndex < (pictures.length - 1)) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  }

  const handlePreviousClick = () => {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  }

  const isShowingFirst = (currentPictureIndex === 0);
  const isShowingLast = (currentPictureIndex === (pictures.length - 1));

  return {
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
    hasMoreThanOnePicture,
    currentPictureIndex,
    paramNotMatchingAHousing,
    pictureIndicator,
    handleNextClick,
    handlePreviousClick,
    isShowingFirst,
    isShowingLast,
  };
};

export default useHousingPage;
