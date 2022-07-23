import React from 'react'
import './EventMain.css'

const MainEvents = ({ 
    typeEvent,
    link,
    image,
    dateEvent,
    decsText,
    title,
}) => {
    return (
        <div className="">
            <a href={link} className="lastest__events">
                <img className="events__img"  src={image} alt="" />
                <div className="events__text">
                    <p className="events__type">{typeEvent}</p>
                    <h2 className="events__title">{title}</h2>
                    <p className="events__date">{dateEvent}</p>
                    <p className="events__decs">{decsText}</p>
                </div>
            </a>
        </div>
    )
}

export default MainEvents