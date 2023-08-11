import {
  ErrorPage,
  HomePage,
} from '../pages';

const ROUTES_MAPPING = [
  {
    path: 'home',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default ROUTES_MAPPING;
