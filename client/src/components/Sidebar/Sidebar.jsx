import React from 'react'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ toggleMenu, setToggleMenu, hamburgerMenu }) => {

    const [toggleContent, setToggleContent] = useState(1);

    const toggleTab = (index) => {
        setToggleContent(index);
    }

  return (
    <div className={
        'app__sidebar ' + 
        (toggleMenu && "sidebar__active")
    }>
        <div className={'app__sidebar-navbar ' +
        (hamburgerMenu && "hamburger__active")}>
            <ul>
                <li onClick={() => {
                    setToggleMenu(true)
                    toggleTab(1)
                }}>
                    MENU
                </li>
                <li onClick={() => {
                    setToggleMenu(true)
                    toggleTab(2)
                }}>
                    NEWS & EVENTS
                </li>
                <li onClick={() => {
                    setToggleMenu(true)
                    toggleTab(3)
                }}>
                    LOGIN
                </li>
            </ul>
        </div>
        <div className='app__sidebar-content'>
            <div className="sidebar__close" onClick={() => {setToggleMenu(!toggleMenu)}}>
                <span className="line1"></span>
                <span className="line2"></span>
            </div>
            <div
                className={toggleContent === 1 ? "sidebar__content sidebar__content-active" : "sidebar__content"}
            >
                Menu - Announcement
            </div>
            <div
                className={toggleContent === 2 ? "sidebar__content sidebar__content-active" : "sidebar__content"}
            >
                News & Events
            </div>
            <div
                className={toggleContent === 3 ? "sidebar__content sidebar__content-active" : "sidebar__content"}
            >
                Login - Logout
            </div>
        </div>
        <div className={(toggleMenu && 'app__sidebar-overlay')} onClick={() => {setToggleMenu(!toggleMenu)}}></div>
    </div>
  )
}

export default Sidebar