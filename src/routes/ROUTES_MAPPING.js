import {
  ErrorPage,
  HomePage,
  AboutPage,
  HousingPage,
} from '../pages';

const ROUTES_MAPPING = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/housing/:housingId',
    element: <HousingPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default ROUTES_MAPPING;
