import React from 'react'
// import {images} from '../../../../constants'
import './search.css'

const HomeSearch = () =>{
    return(
        <div className="Home__search">
            <div className="center">
                <div className="search__section search__col">
                    <div className="search__nav">
                        <input type="text" className='input__result' placeholder='Data Science'/>
                        <button type="submit" className='search__button'>SEARCH PROGRAMS</button>
                    </div>
                    <div className="uni__training">
                        <div className="divider"></div>
                        <h2>
                            <span className="training__title">Education training</span>
                        </h2>
                        <ul>
                            <li>
                                <a href="/">Computer Science & Engineering</a>
                            </li>
                            <li>
                                <a href="/">Data Science</a>
                            </li>
                            <li>
                                <a href="/">Biomedical Science</a>
                            </li>
                            <li>
                                <a href="/">International Business & Management</a>
                            </li>
                            <li>
                                <a href="/">Tourism & Hospitality Management</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch