import React, { useState, useEffect } from 'react';
import {Navbar, Footer} from './components';
import {Home, Dashboard, Students, Blogs,NewsPage} from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <Router>
      
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      {/* <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/> */}

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<NewsPage/>}/>
        {/* <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/blogs' element={<Blogs/>}/> */}
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App;
