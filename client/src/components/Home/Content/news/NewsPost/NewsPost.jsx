import React from 'react'
import './NewsPost.css'

const NewsPosts = ({
    link,
    image,
    tittle,
    }) => {
  return (
    <div className="new__block">
        <img className="new__img" src={image} alt=""/>
        <p className="new__title">
            {tittle}
        </p>
    </div>
  )
}

export default NewsPosts