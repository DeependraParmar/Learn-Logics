import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Courses from './components/Courses/Courses';
import "./App.scss";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import ForgetPassword from './components/Auth/Forget Password/ForgetPassword';
import ResetPassword from './components/Auth/Reset Password/ResetPassword';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import TermsAndConditions from './components/Terms&Conditions/TermsAndConditions';
import NotFound from './components/Layout/Not Found/NotFound';
import CoursePage from './components/Course Page/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';

function App() {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursePage/>} />

        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/termsandconditions' element={<TermsAndConditions />} />

        <Route path='/about' element={<About />} />

        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element = {<ResetPassword />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
