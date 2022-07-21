import React from 'react'
import images from '../../constants/images';

import './Sidebar.css'

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className={'app__sidebar ' + (toggleMenu && "active")}>
        <ul className='app__sidebar-menu'>
            <li onClick={() => setToggleMenu(false)}> 
                HOME
            </li>
            <li onClick={() => setToggleMenu(false)}>
                GAME
            </li>
            <li onClick={() => setToggleMenu(false)}>
                MARKET
            </li>
            <li onClick={() => setToggleMenu(false)}>
                ABOUT
            </li>
        </ul>
    </div>
  )
}

export default Sidebar