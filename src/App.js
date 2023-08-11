import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import ROUTES_MAPPING from './routes/ROUTES_MAPPING';
import './App.scss'

// const AppWithRouter = () => {
//   const routes = useRoutes([...ROUTES_MAPPING]);
//   return (
//     <Routes>
//       {[
//         ...routes,
//       ].map(({
//         path = '',
//         element = <></>,
//       }) => (
//         <Route
//           key={path}
//           exact
//           path={path}
//           element={() => (
//             <h1>Hello</h1>
//           )}
//         />
//       ))}
//     </Routes>
//   );
// };

const App = () => {
  const router = createBrowserRouter([...ROUTES_MAPPING])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
