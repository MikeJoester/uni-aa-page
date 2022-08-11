import React from 'react'
import './SurveyBody.css'
import SurveyPost  from './SurveyPost/SurveyPost'
import surveys from '../../../constants/surveys'

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
                <div>
                {surveys.surveys.map((surveys) =>(
                    <SurveyPost 
                    nameCourse={surveys.nameCourse}
                    Lecturer={surveys.Lecturer}
                    DateSurvey={surveys.DateSurvey}
                    Submitted={surveys.Submitted}
                    linkForm={surveys.linkForm}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SurveyBody
