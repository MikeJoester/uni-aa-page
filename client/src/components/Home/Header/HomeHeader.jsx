import React from 'react'
import './HomeHeader.css'
import {images} from '../../../constants'
import { Link } from 'react-router-dom'

const HomeHeader = () =>{
    return(
        <div className="Home__header">
            <div className="logo">
                <Link to="/">
                    <a href="/">
                        <img className="logo__large" src={images.logoLage} alt="logo" />
                    </a>
                </Link>
                <Link to="/">
                    <img className="logo__md" src={images.logoMed} alt="logo" />
                </Link>
                <Link to="/">
                    <img className="logo__verti" src={images.verlogo1} alt="logo" />
                </Link>
                <Link to="/">
                    <a href="/">
                        <img className="logo__verti2" src={images.verlogo2} alt="logo" />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HomeHeader

