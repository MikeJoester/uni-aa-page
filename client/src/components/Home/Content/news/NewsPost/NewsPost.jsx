import React from 'react'
import './NewsPost.css'

const news = ({
    link,
    image,
    title,
    }) => {
  return (
    <div className="new__block">
      <a href={link} className="new__block-links">
        {/* <div className="new__block"> */}
              <img className="new__img" src={image} alt=""/>
              <p className="new__title">{title}</p> 
        {/* </div> */}
      </a>
    </div>
  )
}

export default news