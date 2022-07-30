import React from 'react'
import './Hamburger.css'

const Hamburger = ({ setToggleMenu, hamburgerMenu }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        })
    }

  return (
    <div className={'app__hamburger ' + (hamburgerMenu && "ham__active")} onClick={() => {
        setToggleMenu(true)
        scrollToTop()
    }}>
        <div className='app__hamburger-content'>
            <span className="hamburger__line1"></span>
            <span className="hamburger__line2"></span>
            <span className="hamburger__line3"></span>
        </div>
    </div>
  )
}

export default Hamburger