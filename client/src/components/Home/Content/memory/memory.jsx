import React from 'react'
import {images} from '../../../../constants'
import './memory.css'

const HomeMemory = () =>{
    return(
        <div className="Home__memory">
                <div className="memory__container">
                    <div className="memory__media">
                        {/* <img className="memory__img" src={images.memory1} alt="" /> */}
                        <div className="memory_card">
                            <p>Graduation Ceremony K18 #VNUK2002#K18</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default HomeMemory