import React, { useState } from 'react'
import './LoginNav.css'

const LoginNav = ({ item }) => {

    const [loginnavOpen, setLoginnavOpen] = useState(false);

  if (item.childrens) {
    return (
        <div className={loginnavOpen ? "loginnav-item open" : "loginnav-item"}>
            <div className='loginnav-title'>
                <span className='loginnav-title-main'>{item.title}</span>
                <span className='loginnav-toggle' onClick={() => setLoginnavOpen(!loginnavOpen)}>+</span>
            </div>
            <div className='loginnav-content'>
                {item.childrens.map((child, index) => <LoginNav key={index} item={child} />)}
            </div>
        </div>
      )
  } else {
    return (
        <a href={item.path || "#"} className={loginnavOpen ? "loginnav-item open" : "loginnav-item"}>
            <div className='loginnav-title'>
                <span className='loginnav-title-sub'>{item.title}</span>
            </div>
        </a>
      )
  }
}

export default LoginNav