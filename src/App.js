import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Courses from './components/Courses/Courses';
import "./App.scss";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
