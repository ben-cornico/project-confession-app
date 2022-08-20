import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SubmitConfession from './Pages/SubmitConfession';

function App() {
  return (
    <>
        <Navbar />

        <div className="container main-content">

          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/confess" element={<SubmitConfession />} />
          </Routes>

        </div>
    </>
  );
}

export default App;
