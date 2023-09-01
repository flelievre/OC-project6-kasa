import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ROUTES_MAPPING from '../routes/ROUTES_MAPPING';
import {
  Footer,
  Header,
} from './App.components';
import {
  IsMobileProvider,
} from '../contexts';
import './App.scss'

const App = () => (
  <IsMobileProvider>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {ROUTES_MAPPING.map(({
            path = '',
            element = <></>,
          }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </IsMobileProvider>
);

export default App;
