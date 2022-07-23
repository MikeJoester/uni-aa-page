import React from 'react'
import './NewsPost.css'

const news = ({
    link,
    image,
    title,
    }) => {
  return (
    <div className="content__article-row">
      <a href={link}>
        <div className="new__block">
              <img className="new__img" src={image} alt=""/>
              <p className="new__title">{title}</p> 
        </div>
      </a>
    </div>
  )
}

export default news