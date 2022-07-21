import React from 'react';
import {Home, Dashboard, Blogs, Students, } from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/students' element={<Students/>}/>
        </Routes>
    </Router>
  )
}

export default App;
