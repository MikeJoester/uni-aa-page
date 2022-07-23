import React from 'react'
import {images} from '../../../../constants'
import './explore.css'
import { Link } from 'react-router-dom'

const HomeExplore = () =>{
    return(
        <div className="Home__explore">
            <div className="explore__marker"></div>
            <div className="center">
                    <div className="module__content explore__column">
                        <h2>
                            <span className="explore__title">Explore</span>
                        </h2>
                        <ul>
                            <li>
                                <a href="#">Announcements</a>
                            </li>
                            <li className="after__login">
                                <a href="#">Credit Registration</a>
                            </li>
                            <li>
                                <Link to="/SchoolCurriculum">
                                    <a href="#">School Curriculum</a>
                                </Link>
                            </li>
                            <li>
                                <a href="#">Rules & Regulations</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default HomeExplore