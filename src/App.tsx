import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import ToolsPage from './pages/ToolsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
