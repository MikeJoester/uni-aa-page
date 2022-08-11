import React from 'react'
import '../../SurveyBody/SurveyBody.css'

const surveys = ({
    nameCourse,
    Lecturer,
    DateSurvey,
    Submitted,
    linkForm,
    }) => {
  return (
    <div className="Survey__content-box">
        <a href={linkForm} className="Survey__links">
            <div className="Survey__section">
                <div className="Survey__title">
                    <p className="Survey__course-name">
                        {nameCourse}
                    </p>
                    <p>Lecturer: {Lecturer}</p>
                </div>
                <div className="Survey__date">
                    <p className="Survey__submitted">Date: {DateSurvey}</p>
                    <p className="Suvery__expiration-date">Submit: {Submitted}</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default surveys