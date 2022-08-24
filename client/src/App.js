import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';
import { useState } from 'react';
import Search from './Pages/Search';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const searchParams = new URLSearchParams(window.location.search).get("search");
  const selectCat = (cat) => {
      console.log("SELECT CAT: ", cat)
      setSelectedCategory(cat)
  }


  return (
    <>
        <Navbar/>

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home selectCat={selectCat}/>}/>
              
              <Route path="/search/" element={<Search searchParams={searchParams} />}/>
              <Route path="/:category" element={<Home/>} />
              <Route exact path="/confess" element={<SubmitConfession />} />
          </Routes>

        </div>
    </>
  );
}

export default App;
