import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Confirmed from './pages/Confirmed';
import { Home } from './pages/Home';
import JobList from './pages/JobList';
import Login from './pages/Login';
import Register from './pages/Register';
import RequestList from './pages/RequestList';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/jobs" element={<JobList/>}/>
      <Route path="/request" element={<RequestList/>}/>
      <Route path="/confirmed" element={<Confirmed/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignUp/register" element={<Register/>}/>
    </Routes>
  )
}

export default App;
