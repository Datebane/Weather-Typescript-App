import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import { Home } from './pages/Home/Home.tsx';
import { DetailsPage } from './pages/DetailsPage/DetailsPage.tsx';
import { Header } from './shared/Header/Header.tsx';
// import { Popup } from './shared/Popup/Popup.tsx';

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details-page" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
