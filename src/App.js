import React from 'react';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { headerRoutes } from './Components/Routes/Route';
import AboutUs from './Components/Pages/About/AboutUs';
import MediaHero from './Components/Pages/About/Media/MediaHero';

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
