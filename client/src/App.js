import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';
import { useState, useEffect } from 'react';
import Search from './Pages/Search';

function App() {
  const searchParams = new URLSearchParams(window.location.search).get("search");
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    setSearchString(searchParams)
  
  }, [searchParams])
  


  return (
    <>
        <Navbar/>

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home />}/>
              
              <Route path="/search/" element={<Search searchParams={searchString} />}/>
              <Route path="/:category" element={<Home/>} />
              <Route exact path="/confess" element={<SubmitConfession />} />
          </Routes>

        </div>
    </>
  );
}

export default App;
