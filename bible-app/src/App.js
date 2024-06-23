import React from 'react';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
