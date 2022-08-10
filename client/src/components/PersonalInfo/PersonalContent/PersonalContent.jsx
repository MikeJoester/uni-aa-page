import React, { useEffect, useState } from "react";
import "./PersonalContent.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

const PersonalContent = () => {
  const [student, setStudent] = useState({});
  const [classes, setClass] = useState("");
  const [major, setMajor] = useState("");
  useEffect(() => {
    let userObject = jwt_decode(localStorage.getItem("user"));
    console.log(userObject);
    if (localStorage.getItem("user")) {
      const getStudent = async () => {
        const res = await axios.get(
          "http://localhost:5000/students/studentEmail/" + userObject.email
        );
        const getClass = await axios.get(
          "http://localhost:5000/classes/" + res.data[0].class
        );
        const getMajor = await axios.get(
          "http://localhost:5000/majors/" + res.data[0].major
        );
        setStudent(res.data[0]);
        console.log(res.data[0]);
        setClass(getClass.data.class_name);
        console.log(getClass.data.class_name);
        setMajor(getMajor.data.major_name);
        console.log(getMajor.data.major_name);
      };
      getStudent();
      console.log(student);
    }
  }, []);

  return (
    <div className="Personal__Content">
      <div className="Personal__wrap">
        <div className="Personal__nav-place">
          <a href="/" className="Back__home">
            Home
          </a>
          <span className="crumsep">{">"}</span>
          <span class="Personal__current-place">Profile</span>
          <span className="crumsep">{">"}</span>
          <span class="Personal__current-place">Personal Information</span>
          <p className="Personal__Name">Personal Information</p>
        </div>
        <p className="student__information-title">Student Information</p>
        <div className="student__information">
          <div className="student__info-col1">
            <div className="student__info-row">
              <div className="student__info-name">
                <p>Full Name</p>
                <input type="text" disabled placeholder={student.full_name} />
              </div>
              <div className="student__info-gender">
                <p>Male</p>
                <input
                  type="text"
                  disabled
                  value={student.gender ? "Male" : "Female"}
                />
              </div>
            </div>
            <div className="student__national">
              <p>Birth Place</p>
              <input type="text" disabled placeholder={student.birth_place} />
            </div>
            <div className="student__Birthday">
              <p>Birth Day</p>
              <input
                type="text"
                disabled
                placeholder={student.birth_date
                  .replace("-", "/")
                  .split("T")[0]
                  .replace("-", "/")}
              />
            </div>
            <div className="student__Birthplace">
              <p>Credit</p>
              <input type="text" disabled placeholder={student.credit} />
            </div>
          </div>
          <div className="student__info-col1">
            <div className="student__info-ID">
              <p>Identity card</p>
              <input type="text" disabled placeholder={student._id} />
            </div>
            <div className="student__Major">
              <p>Major</p>
              <input type="text" disabled placeholder={major} />
            </div>
            <div className="student__Class">
              <p>Class</p>
              <input type="text" disabled placeholder={classes} />
            </div>
            <div className="student__ID">
              <p>Student ID</p>
              <input type="text" disabled placeholder={student.student_id} />
            </div>
          </div>
        </div>
        <p className="student__information-title">Contact Infomation</p>
        <div className="student__information">
          <div className="student__info-col1">
            <div className="student__email">
              <p>Email</p>
              <input type="text" disabled placeholder={student.email} />
            </div>
            <div className="student__phone">
              <p>phone</p>
              <input type="text" placeholder={student.phone} />
            </div>
          </div>
          <div className="student__info-col1">
            <div className="student__address">
              <p>Address</p>
              <input type="text" placeholder={student.birth_place} />
            </div>
          </div>
        </div>
        <div className="button__save">
          <button className="btn__profile" type="submit">
            Change & save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalContent;
