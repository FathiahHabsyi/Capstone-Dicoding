import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Confirmed from './pages/Confirmed';
import { Home } from './pages/Home';
import JobList from './pages/JobList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/jobs" element={<JobList/>}/>
      <Route path="/confirmed" element={<Confirmed/>}/>
    </Routes>
  )
}

export default App;
