import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Minute1 from './pages/Minute1';
import Minute3 from './pages/Minute3';
import Minute5 from './pages/Minute5';
import Minute10 from './pages/Minute10';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';


function App() {
  return (
  <>
    
   
    <BrowserRouter>                 
          <Routes>
            <Route path="/" exact element={<Minute1 />} />
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
            <Route path="/minute1" exact element={<Minute1 />} />
            <Route path="/minute3" exact element={<Minute3 />} />
            <Route path="/minute5" exact element={<Minute5 />} />
            <Route path="/minute10" exact element={<Minute10 />} />
          </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
