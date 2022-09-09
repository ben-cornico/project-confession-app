import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';
import { useState, useEffect } from 'react';
import Search from './Pages/Search';
import Category from './Pages/Category';
import View from './Pages/View';

function App() {
  const searchParams = new URLSearchParams(window.location.search).get("search");

  return (
    <>
        <Navbar/>

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home />}/>
              
              <Route path="/search/" element={<Search searchParams={searchParams} />}/>
              <Route path="/:category" element={<Category/>} />
              <Route exact path="/confess" element={<SubmitConfession />} />
              <Route path="/test" element={<View />}></Route>
          </Routes>

        </div>
    </>
  );
}

export default App;
