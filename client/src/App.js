import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element="<h1>TEST</h1>"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
