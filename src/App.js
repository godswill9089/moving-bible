import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { headerRoutes } from './Components/Routes/Route';
import MediaHero from './Components/Pages/About/Media/MediaHero';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={headerRoutes.About} element={<AboutUs />} />
        <Route path={headerRoutes.Media} element={<MediaHero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
