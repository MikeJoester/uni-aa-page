import React, { useState, useEffect, useContext } from 'react';
import {Context} from './context/Context';

import {
  Dashboard,
  Students,
  Blogs,
  Settings,
  Courses,
  Feedbacks,
  Login,
  Grades,
  ClassList,
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

  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/login' element={user ? <Dashboard/> : <Login/>}/>
          <Route path='/' element={user ? <Dashboard/> : <Login/>}/>
          <Route path='/majors' element={user ? <Students/> : <Login/>}/>
          <Route path='/class/:id' element={user ? <ClassList/> : <Login/>}/>
          <Route path='/blogs' element={user ? <Blogs/> : <Login/>}/>
          <Route path='/settings' element={user ? <Settings/> : <Login/>}/>
          <Route path='/courses' element={user ? <Courses/> : <Login/>}/>
          <Route path='/feedbacks' element={user ? <Feedbacks/> : <Login/>}/>
          <Route path='/grades/:email' element={user ? <Grades/> : <Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
