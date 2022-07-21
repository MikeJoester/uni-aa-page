import React from 'react'
import './NewsPost.css'

const NewsPost = ({
    link,
    image,
    tittle,
    }) => {
  return (
    <div className="new__block">
        <a className="new__title" href={link}>
          <img className="new__img" src={image} alt=""/>
              <p>{tittle}</p> 
        </a>
    </div>
  )
}

export default NewsPost