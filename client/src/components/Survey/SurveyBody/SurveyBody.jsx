import React, { useEffect, useState } from "react";
import "./SurveyBody.css";
import SurveyPost from "./SurveyPost/SurveyPost";
import surveys from "../../../constants/surveys";
import axios from "axios";
import jwt_decode from "jwt-decode";

const SurveyBody = () => {
  const [survey, setSurvey] = useState([]);
  useEffect(() => {
    const getSurvey = async () => {
      const res = await axios.get("https://uni-aa-page.herokuapp.com/surveys");
      setSurvey(res.data);
      // console.log(res.data[0]);
    };
    getSurvey();
    console.log(survey);
  }, []);

  return (
    <div className="Survey__Content">
      <div className="Survey__wrap">
        <div className="Survey__nav-place">
          <a href="/" className="Back__home">
            Home
          </a>
          <span className="crumsep">{">"}</span>
          <span class="SurveyContent__current-place">About the course</span>
          <span className="crumsep">{">"}</span>
          <span class="SurveyContent__current-place">Survey</span>
          <div className="Survey__row">
            <p className="Survey__Name">
              Survey
              <span>
                <p>
                  Every feedback makes our training and teaching quality improve
                  and become better.
                </p>
              </span>
            </p>
            <div className="Survey__count">
              <p>Available</p>
              <span>{survey.length}</span>
            </div>
          </div>
        </div>
        <div>
          {survey.map((item) => (
            <SurveyPost
              nameCourse={item.course_name}
              Lecturer={item.lecturer_name}
              DateSurvey={item.post_date}
              Submitted={item.deadline}
              linkForm={item.form_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyBody;
