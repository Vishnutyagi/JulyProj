import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default App;
