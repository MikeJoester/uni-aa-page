import React from 'react'
import { images } from '../../../../constants'
import './NewsNav.css'

const NewsNav = () => {
  return (
    <div className='sidebar__newsnav'>
        <div className='newsnav__image'>
            <img src={images.Nig} alt="" />
        </div>
        <div className='newsnav__content'>
            <div className='newsnav__content-title'>
                AI speeds sepsis detection to prevent hundreds of deaths
            </div>
            <div className='newsnav__content-date'>
                2 days ago
            </div>
        </div>
    </div>
  )
}

export default NewsNav