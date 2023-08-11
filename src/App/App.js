import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import ROUTES_MAPPING from '../routes/ROUTES_MAPPING';
import {
  Footer,
} from './App.components';
import './App.scss'

const App = () => {
  const router = createBrowserRouter([...ROUTES_MAPPING])
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
