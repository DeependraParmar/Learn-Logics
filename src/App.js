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
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CoursesAdmin from './components/Admin/Courses/CoursesAdmin';
import Users from './components/Admin/Users/Users';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import { Toaster } from 'react-hot-toast';
import BlogsHome from './components/Blogs/BlogsHome';
import BlogDetails from './components/Blogs/BlogDetails';

function App() {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  
  return (
    <Router>
      <Header/>
      <Routes>
        {/* Common Routes  */}
        <Route path="/" element={<Home/>} />

        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursePage/>} />

        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/termsandconditions' element={<TermsAndConditions />} />

        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<BlogsHome />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />

        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element = {<ResetPassword />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />

        {/* admin routes  */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/courses' element={<CoursesAdmin />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/createcourse' element={<CreateCourse />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
      <Toaster />
    </Router>
  );
}

export default App;
