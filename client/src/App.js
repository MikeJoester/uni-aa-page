import React, { useState, useEffect } from 'react';
import { Sidebar, Footer, Hamburger } from './components';
import { Home, Curriculum, CurriDetails, Notification, Transcript, PersonalInfo, RegisterCredit, NewsPage, Survey, Rules } from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {

  // window.onunload = () => {
  //   // Clear the local storage
  //   localStorage.clear()
  // }

  const [toggleMenu, setToggleMenu] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const showHamburger = () => {
    if (window.scrollY > 0) {
      setHamburgerMenu(true)
    } else {
      setHamburgerMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showHamburger);
  })

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [toggleMenu])

  // useEffect(() => {
  //   if (localStorage.getItem('student')) {
  //     console.log(localStorage.getItem('student'));
  //   }
  // }, [])


  return (
    <Router>

      {!toggleMenu && (<Hamburger setToggleMenu={setToggleMenu} hamburgerMenu={hamburgerMenu} />)}
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} hamburgerMenu={hamburgerMenu} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SchoolCurriculum' element={<Curriculum />} />
        <Route path='/SchoolCurriculum/details' element={<CurriDetails />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Transcript/' element={<Transcript />} />
        <Route path='/PersonalInformation' element={<PersonalInfo />} />
        <Route path='/CreditRegister' element={<RegisterCredit />} />
        <Route path='/Announcement' element={<NewsPage />} />
        <Route path='/Survey' element={<Survey />} />
        <Route path='/Rules' element={<Rules />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;


