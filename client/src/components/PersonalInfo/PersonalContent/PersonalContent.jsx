import React, { useEffect, useState, useRef } from "react";
import "./PersonalContent.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useAlert, positions, Provider as AlertProvider } from "react-alert";

const PersonalContent = () => {
  const [student, setStudent] = useState({});
  const [isUpdate, setUpdate] = useState(false);
  const [buttonText, setButtonText] = useState("Change");
  const [isSuccessful, setSuccess] = useState();
  const studentPhone = useRef();
  const studentAddress = useRef();
  const alert = useAlert();
  const userObject = jwt_decode(localStorage.getItem("student"));

  useEffect(() => {
    // console.log(userObject);
    if (localStorage.getItem("student")) {
      const getStudent = async () => {
        const res = await axios.get(
          "https://uni-aa-page.herokuapp.com/students/studentEmail/" +
            userObject.email
        );
        setStudent(res.data[0]);
        // console.log(res.data[0]);
      };
      getStudent();
      // console.log(student);
    }
  }, []);

  const handleChangeAndSave = async (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      if (!isUpdate) {
        document.getElementById("info__student-phone").disabled = false;
        document.getElementById("info__student-address").disabled = false;
        setUpdate(!isUpdate);
        setButtonText("Save");
        alert.show("You can change Address and Phone");
      } else {
        const updatedAddress =
          studentAddress.current.value === ""
            ? student.address
            : studentAddress.current.value;
        const updatedPhone =
          studentPhone.current.value === ""
            ? student.phone
            : studentPhone.current.value;
        const updatedData = await axios.patch(
          `https://uni-aa-page.herokuapp.com/students/${student._id}`,
          {
            address: updatedAddress,
            phone: updatedPhone,
          }
        );
        // console.log(updatedData.data);
        document.getElementById("info__student-phone").disabled = true;
        document.getElementById("info__student-address").disabled = true;
        setUpdate(!isUpdate);
        setButtonText("Change");
        alert.show("Successfully saved");
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      if (!isSuccessful) {
        alert.show("Something went wrong");
      }
    }
  };

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
              <input type="text" disabled placeholder={student.birth_date} />
            </div>
            <div className="student__Birthplace">
              <p>Credit</p>
              <input type="text" disabled placeholder={student.credit} />
            </div>
          </div>
          <div className="student__info-col1">
            <div className="student__info-ID">
              <p>Identity card</p>
              <input
                type="text"
                disabled
                placeholder={student.identity_number}
              />
            </div>
            <div className="student__Major">
              <p>Major</p>
              <input type="text" disabled placeholder={student.major} />
            </div>
            <div className="student__Class">
              <p>Class</p>
              <input type="text" disabled placeholder={student.class} />
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
              <p>Phone</p>
              <input
                id="info__student-phone"
                type="text"
                disabled
                placeholder={student.phone}
                ref={studentPhone}
              />
            </div>
          </div>
          <div className="student__info-col1">
            <div className="student__address">
              <p>Address</p>
              <input
                id="info__student-address"
                type="text"
                disabled
                placeholder={student.address}
                ref={studentAddress}
              />
            </div>
          </div>
        </div>
        <div className="button__save">
          <button
            className="btn__profile"
            type="submit"
            onClick={handleChangeAndSave}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalContent;
