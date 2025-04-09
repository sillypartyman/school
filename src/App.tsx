import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Overview from './pages/Overview';
import LiteracyNarrative from './pages/LiteracyNarrative';
import RhetoricalAnalysis from './pages/RhetoricalAnalysis';
import DetailedProfile from './pages/DetailedProfile';
import RemediationProject from './pages/RemediationProject';
import Reflection from './pages/Reflection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/literacy-narrative" element={<LiteracyNarrative />} />
            <Route path="/rhetorical-analysis" element={<RhetoricalAnalysis />} />
            <Route path="/detailed-profile" element={<DetailedProfile />} />
            <Route path="/remediation-project" element={<RemediationProject />} />
            <Route path="/reflection" element={<Reflection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;