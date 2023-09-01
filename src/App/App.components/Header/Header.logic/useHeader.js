import {
  useLocation,
} from 'react-router-dom';

const useHeader = () => {
  const {
    pathname,
  } = useLocation();

  const isRouteActive = (route = '') => (
    (route === pathname)
  );
  return {
    isRouteActive,
  };
};

export default useHeader;
