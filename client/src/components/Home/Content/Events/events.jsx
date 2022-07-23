import React from 'react'
import {images} from '../../../../constants'
import events from '../../../../constants/events'
import EventPosts from './EventPosts/EventPosts'
import EventMain from './EventMain/EventMain'
import './events.css'

const HomeEvents = () =>{
    return(
        <div className="Home__events">
            <div className="content__events events__divide">
                <div className="center">
                    <div className="events__col">
                         {/*<div className="lastest__events">
                            <img className="events__img"  src={images.event1} alt="" />
                            <div className="events__text">
                                <p className="events__type">Celebration</p>
                                <h2 className="events__title">Graduation ceremony</h2>
                                <p className="events__date">July 7, 2022</p>
                                <p className="events__decs">The graduation ceremony of VNUK 2022 has passed, but emotional moments 
                                    are still preserved in these photos, like the lyrics of Ed Sheeran: 
                                    “We keep this love in a photograph. We made these memories for ourselves.”</p>
                                    </div> 
                                </div>*/}
                                {events.MainEvents.map((MainEvents) => (
                                <EventMain
                                dateEvent={MainEvents.dateEvent}
                                link={MainEvents.link}
                                image={MainEvents.image} 
                                title={MainEvents.title}
                                typeEvent={MainEvents.typeEvent}
                                decsText={MainEvents.decsText}
                                />
                            ))}
                            
                        <div className="events__post">
                            {/* <div className="new__block">
                                <img className="new__img" src={images.memory4} alt="" />
                                <div className="event__post-text">
                                    <p className="events__type">Celebration</p>
                                    <p className="new__title">
                                       Celebration of VNUK
                                    </p>
                                    <p className="events__date">July 7, 2022</p>
                                </div>
                            </div>
                            <div className="new__block">
                                <img className="new__img" src={images.Nig} alt="" />
                                <div className="event__post-text">
                                    <p className="events__type">Event</p>
                                    <p className="new__title">
                                        ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                                    </p>
                                    <p className="events__date">July 7, 2022</p>
                                </div>
                            </div>
                            <div className="new__block">
                                <img className="new__img" src={images.Nig} alt="" />
                                <div className="event__post-text">
                                    <p className="events__type">Celebration</p>
                                    <p className="new__title">
                                        ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                                    </p>
                                    <p className="events__date">July 7, 2022</p>
                                </div>
                            </div> */}
                            {events.events.map((events) =>(
                                <EventPosts 
                                dateEvent={events.dateEvent}
                                link={events.link}
                                image={events.image} 
                                title={events.title}
                                typeEvent={events.typeEvent}
                                />
                            ))}
                        </div>
                        <div className="more__events">
                            <a href="#" className="more__events-link">MORE EVENTS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeEvents