import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularHotels from './pages/PopularHotels.jsx';

function App() {
  return (
    <Router>
      <div className="App  bg-[#FFFEDD]">
        <Routes>
          <Route path="/" element={<PopularHotels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;