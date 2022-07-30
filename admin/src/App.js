import React, { useState, useEffect } from 'react';

import {AdminNavbar} from './components/';

import {
  Dashboard,
  Students,
  Blogs,
  Settings,
  Courses,
  Feedbacks,
  Login,
  Grades,
} from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.css';

const App = () => {
  function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    console.log(pathname)

    return null;
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <AdminNavbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/feedbacks' element={<Feedbacks/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/grades/:email' element={<Grades/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
