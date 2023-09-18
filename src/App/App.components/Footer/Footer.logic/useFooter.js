import {
  useLocation,
  matchRoutes,
} from 'react-router-dom';
import ROUTES_MAPPING from '../../../../routes/ROUTES_MAPPING';

const useFooter = () => {
  const {
    pathname,
  } = useLocation();

  const [
    {
      route: {
        shouldFooterBeFixed = false,
      } = {},
    } = {},
  ] = matchRoutes(ROUTES_MAPPING, pathname) || [];

  return {
    shouldFooterBeFixed,
  };
};

export default useFooter;
