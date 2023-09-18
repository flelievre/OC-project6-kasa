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
    shouldFooterBeFixed: false,
  },
  {
    path: '/housing/:housingId',
    element: <HousingPage />,
    shouldFooterBeFixed: false,
  },
  {
    path: 'about',
    element: <AboutPage />,
    shouldFooterBeFixed: true,
  },
  {
    path: '*',
    element: <ErrorPage />,
    shouldFooterBeFixed: false,
  },
];

export default ROUTES_MAPPING;
