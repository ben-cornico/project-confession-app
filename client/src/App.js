import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';
import Search from './Pages/Search';
import Category from './Pages/Category';
<<<<<<< HEAD
import View from './Pages/View';
import About from './Pages/About';
import Privacy from './Pages/Privacy';

function App() {
  const searchParams = new URLSearchParams(window.location.search).get("search");
  
=======

function App() {
  const searchParams = new URLSearchParams(window.location.search).get("search");
  const [searchString, setSearchString] = useState("");

>>>>>>> parent of 5c37837 (code cleanup)
  return (
    <div className='app'>
        <Navbar/>

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/privacy" element={<Privacy />}></Route>
              <Route path="/search/" element={<Search searchParams={searchParams} />}/>
              <Route path="/confession/:id" element={<View />} />
              <Route path="/:category" element={<Category/>} />
              
              
              <Route exact path="/confess" element={<SubmitConfession />} />
          </Routes>

        </div>
    </div>
  );
}

export default App;
