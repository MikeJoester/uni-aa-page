import React from 'react'
import './SurveyBody.css'

const SurveyBody = () =>{
    return(
        <div className="Survey__Content">
            <div className="Survey__wrap">
                <div className="Survey__nav-place">
                    <a href="/" className="Back__home">Home</a>
                    <span className="crumsep">{">"}</span>
                    <span class="SurveyContent__current-place">About the course</span>
                    <span className="crumsep">{">"}</span> 
                    <span class="SurveyContent__current-place">Survey</span>
                    <div className="Survey__row">
                        <p className="Survey__Name">
                            Survey
                            <span><p>Every feedback makes our training and teaching quality improve and become better.</p></span>
                        </p>
                        <div className="Survey__count">
                            <p>Available</p>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className="Survey__content-box">
                    <a href="https://forms.gle/DXosXwqgGgkbEAqc8" className="Survey__links">
                        <div className="Survey__section">
                            <div className="Survey__title">
                                <p className="Survey__course-name">
                                    Mobile Application Development
                                </p>
                                <p>Lecturer: Tran The Vu</p>
                            </div>
                            <div className="Survey__date">
                                <p className="Survey__submitted">Date: Jun 21, 2022</p>
                                <p className="Suvery__expiration-date">Submit: Jun 28, 2022</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://forms.gle/DXosXwqgGgkbEAqc8" className="Survey__links">
                        <div className="Survey__section">
                            <div className="Survey__title">
                                <p className="Survey__course-name">
                                    Data structure and Algorithms
                                </p>
                                <p>Lecturer: Tran Ngoc Anh</p>
                            </div>
                            <div className="Survey__date">
                                <p className="Survey__submitted">Date: Jun 21, 2022</p>
                                <p className="Suvery__expiration-date">Submit: Jun 28, 2022</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SurveyBody
