import React from 'react'
import './EventPosts.css'

const events = ({
    typeEvent,
    link,
    image,
    dateEvent,
    title,
    }) => {
  return (
    <div className="new__block">
      <a href={link} className="events__block-links">
        {/* <div className="new__block"> */}
            <img className="new__img" src={image} alt=""/>
            <div className="event__post-text">
                <p className="events__type">{typeEvent}</p>
                <p className="new__title">{title}</p>
              <p className="events__date">{dateEvent}</p>
            </div>
        {/* </div> */}
      </a>
    </div>
  )
}

// const MainEvents = ({ 
//     typeEvent,
//     link,
//     image,
//     dateEvent,
//     decsText,
//     title,
// }) => {
//     return (
//         <div className="lastest__events">
//             <a href={link} className="new__block-links">
//                 <img className="events__img"  src={image} alt="" />
//                 <div className="events__text">
//                     <p className="events__type">{typeEvent}</p>
//                     <h2 className="events__title">{title}</h2>
//                     <p className="events__date">{dateEvent}</p>
//                     <p className="events__decs">{decsText}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }



export default events
