import React from 'react'
import './HomeHeader.css'
import {images} from '../../../constants'

const HomeHeader = () =>{
    return(
        <div className="Home__header">
            <div className="logo">
                <img className="logo__large" src={images.logoLage} alt="logo" />
                <img className="logo__md" src={images.logoMed} alt="logo" />
                <img className="logo__verti" src={images.verlogo1} alt="logo" />
                <img className="logo__verti2" src={images.verlogo2} alt="logo" />
            </div>
        </div>
    )
}

export default HomeHeader

