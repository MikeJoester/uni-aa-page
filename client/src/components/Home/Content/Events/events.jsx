import React from 'react'
import {images} from '../../../../constants'
import './events.css'

const HomeEvents = () =>{
    return(
        <div className="Home__events">
            <div className="content__events events__divide">
                <div className="center">
                    <div className="events__col">
                        <div className="lastest__events">
                            <img className="events__img"  src={images.event1} alt="" />
                            <div className="events__text">
                                <p className="events__type">Celebration</p>
                                <h2 className="events__title">Graduation ceremony</h2>
                                <p className="events__date">July 7, 2022</p>
                                <p className="events__decs">The graduation ceremony of VNUK 2022 has passed, but emotional moments 
                                    are still preserved in these photos, like the lyrics of Ed Sheeran: 
                                    “We keep this love in a photograph. We made these memories for ourselves.”</p>
                            </div>
                        </div>
                        <div className="events__post">
                            <div className="new__block">
                                <img className="new__img" src={images.Nig} alt="" />
                                <p className="new__title">
                                    ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                                </p>
                            </div>
                            <div className="new__block">
                                <img className="new__img" src={images.Nig} alt="" />
                                <p className="new__title">
                                    ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                                </p>
                            </div>
                            <div className="new__block">
                                <img className="new__img" src={images.Nig} alt="" />
                                <p className="new__title">
                                    ANTI-BACKPACK DAY FINALLY COMES TO VN-UK!!!!!
                                </p>
                            </div>
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