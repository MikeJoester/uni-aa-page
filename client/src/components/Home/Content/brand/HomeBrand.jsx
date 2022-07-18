import React from 'react'
import {images} from '../../../../constants'
import './HomeBrand.css'

const HomeBrand = () =>{
    return(
        <div className="Home__brand">
            <div className="content__brand brand__divided">
                <div className="dot__matrix"></div>
                <div className="center force">
                    <div className="brand__column">
                        <h2 className="brand__h2">
                            <span className="line__one">When ambition<br/></span>
                            
                            <span className="line__two">meet opportunity,<br/></span>
                            <strong>
                                <span className="line__three">anything <br/></span>
                                <span className="line__four">is possible.</span>
                            </strong>
                        </h2>
                        <p className="text__desc">At VNUK, you can explore ideas that interest you, find people who inspire and challenge you, and make discoveries that change your life—and the world.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBrand