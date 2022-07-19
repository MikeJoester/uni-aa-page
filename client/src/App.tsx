import React from 'react';
import {Navbar, Footer} from './components';
import {Home, } from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {
  
  // const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App;
