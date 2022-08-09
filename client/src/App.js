import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="container main-content">

          <Routes>

              <Route path="/" element={<Home />}/>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
