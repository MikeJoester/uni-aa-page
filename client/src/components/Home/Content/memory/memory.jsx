import React from 'react'
import {images} from '../../../../constants'
import './memory.css'

const HomeMemory = () =>{
    return(
        <div className="Home__memory">
                <div className="memory__container">
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory1} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory2} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory3} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory4} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="memory__media">
                        <figure>
                            <img className="memory__img" src={images.memory5} alt="" />
                            <figcaption>
                                <p className="memory__title">Graduation Ceremony K18 #VNUK2002#K18</p>
                                <a href="/">VIEW ON FACEBOOK</a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

    )
}

export default HomeMemory