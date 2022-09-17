import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/Home';

const App: React.FunctionComponent = () => {
  return (
    <div className="grid">
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
