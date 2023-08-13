import { useParams } from 'react-router-dom';
import housing from '../../../data/logements.json';

const useHousingPage = () => {
  const {
    housingId,
  } = useParams();

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
  } = housing.filter(({ id: dataHousingId }) => (
    (dataHousingId === housingId)
  ))[0];

  const hasMoreThanOnePicture = (pictures.length > 1);

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
  };
};

export default useHousingPage;
