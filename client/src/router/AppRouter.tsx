import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppRouter () {
  return (
    <>
      <Header />
      <Routes>      
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;