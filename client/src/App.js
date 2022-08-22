import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const searchParams = new URLSearchParams(window.location.search).get("search")
  console.log(searchParams)
  const selectCat = (cat) => {
      console.log("SELECT CAT: ", cat)
      setSelectedCategory(cat)
  }

  const submitSearch = () => {
    console.log("SUBMIT SEARCH")
  }

  return (
    <>
        <Navbar submitSearch={submitSearch}/>

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home selectCat={selectCat}/>}/>
              <Route path="/:category" element={<Home/>}>
              </Route>

              <Route exact path="/confess" element={<SubmitConfession />} />
          </Routes>

        </div>
    </>
  );
}

export default App;
