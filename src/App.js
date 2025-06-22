import React from 'react';
import HomeView from './components/HomeView';
import MediaView from './components/MediaView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" style={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/media/:dogId" element={<MediaView />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
