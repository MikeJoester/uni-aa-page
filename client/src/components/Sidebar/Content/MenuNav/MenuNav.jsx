import React, { useState } from 'react'
import './MenuNav.css'

const MenuNav = ({ item }) => {

    const [menunavOpen, setMenunavOpen] = useState(false);

  if (item.childrens) {
    return (
        <div className={menunavOpen ? "menunav-item open" : "menunav-item"}>
            <div className='menunav-title'>
                <span className='menunav-title-main'>{item.title}</span>
                <span className='menunav-toggle' onClick={() => setMenunavOpen(!menunavOpen)}>+</span>
            </div>
            <div className='menunav-content'>
                {item.childrens.map((child, index) => <MenuNav key={index} item={child} />)}
            </div>
        </div>
      )
  } else {
    return (
        <a href={item.path || "#"} className={menunavOpen ? "menunav-item open" : "menunav-item"}>
            <div className='menunav-title'>
                <span className='menunav-title-sub'>{item.title}</span>
            </div>
        </a>
      )
  }
}

export default MenuNav