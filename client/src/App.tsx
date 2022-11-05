import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import HomePage from './pages/Home/Home';
import NotFound from './pages/404/NotFound';
import About from './pages/About/About';

const App: React.FunctionComponent = () => {
  return (
    <div className="wrapper page">
      <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<About />} />      
      </Routes>
    </div>
  );
};

export default App;