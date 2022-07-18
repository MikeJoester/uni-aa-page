import React from 'react';
import {Home, } from './pages'
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
        </Routes>

    </Router>
  )
}

export default App;
