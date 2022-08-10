import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./Sidebar.css";
import menuitems from "../../constants/sidebar.json";
import loginitems from "../../constants/logedin.json";
import NewsNav from "./Content/NewsNav/NewsNav";
import MenuNav from "./Content/MenuNav/MenuNav";
import LoginNav from "./Content/LoginNav/LoginNav";

const Sidebar = ({ toggleMenu, setToggleMenu, hamburgerMenu }) => {
  const [toggleContent, setToggleContent] = useState(1);

  const toggleTab = (index) => {
    setToggleContent(index);
  };

  const [login, setLogin] = useState();
  const [user, setUser] = useState({});
  const [student, setStudent] = useState({});
  const google = window.google;

  function handleCallbackResponse(response) {
    localStorage.clear();
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    const mailPath = userObject.email.split("@")[1];
    if (mailPath === "vnuk.edu.vn") {
      setLogin(true);
      setUser(userObject);
      localStorage.setItem("user", response.credential);
      document.getElementById("btn__login login").hidden = true;
      document.getElementById("btn__logout logout").hidden = false;
      // console.log(localStorage.getItem("user"));
    }
  }

  function handleSignOut(event) {
    console.log(student);
    setLogin(false);
    setUser({});
    setStudent({});
    google.accounts.id.initialize({
      client_id:
        "43504168610-a1kbfok85h46f76qbbphdqjvljvm6ujn.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("btn__login login"),
      { theme: "outline", size: "medium", text: "signin_with" }
    );
    document.getElementById("btn__login login").hidden = false;
    document.getElementById("btn__logout logout").hidden = true;
    localStorage.clear();
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const getStudent = async () => {
        const res = await axios.get(
          "http://localhost:5000/students/studentEmail/" + user.email
        );
        setStudent(res.data[0]);
        // console.log(res.data[0]);
      };
      getStudent();
      // console.log(student);
    }
  }, [student, user]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let userObject = jwt_decode(localStorage.getItem("user"));
      console.log(userObject);
      const mailPath = userObject.email.split("@")[1];
      if (mailPath === "vnuk.edu.vn") {
        setLogin(true);
        setUser(userObject);
        document.getElementById("btn__login login").hidden = true;
        document.getElementById("btn__logout logout").hidden = false;
        // console.log(localStorage.getItem("user"));
      }
    } else {
      google.accounts.id.initialize({
        client_id:
          "43504168610-a1kbfok85h46f76qbbphdqjvljvm6ujn.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("btn__login login"),
        { theme: "outline", size: "medium", text: "signin_with" }
      );

      google.accounts.id.prompt();
    }
  }, []);

  return (
    <div className={"app__sidebar " + (toggleMenu && "sidebar__active")}>
      <div
        className={
          "app__sidebar-navbar " + (hamburgerMenu && "hamburger__active")
        }
      >
        <ul>
          <li
            onClick={() => {
              setToggleMenu(true);
              toggleTab(1);
            }}
          >
            MENU
          </li>
          <li
            onClick={() => {
              setToggleMenu(true);
              toggleTab(2);
            }}
          >
            NEWS & EVENTS
          </li>
          <li
            onClick={() => {
              setToggleMenu(true);
              toggleTab(3);
            }}
          >
            LOGIN
          </li>
        </ul>
      </div>
      <div className="app__sidebar-content">
        <div
          className="sidebar__close"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
        <div
          className={
            toggleContent === 1
              ? "sidebar__content sidebar__content-active"
              : "sidebar__content"
          }
        >
          <div className="sidebar__menu-main">
            <div className="menunav">
              {menuitems.map((item, index) => (
                <MenuNav key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="sidebar__menu-sub"></div>
        </div>
        <div
          className={
            toggleContent === 2
              ? "sidebar__content sidebar__content-active"
              : "sidebar__content"
          }
        >
          <div className="sidebar__news">
            <h1 className="sidebar__news-title">Recent News</h1>
            <NewsNav />
            <NewsNav />
            <p>
              <a
                className="sidebar__news-links"
                href="https://vnuk.edu.vn/tin-tuc/"
              >
                More news
              </a>
            </p>
          </div>
          <div className="sidebar__events">
            <h1 className="sidebar__events-title">Upcoming Events</h1>
            <NewsNav />
            <NewsNav />
            <p>
              <a
                className="sidebar__events-links"
                href="https://vnuk.edu.vn/su-kien/"
              >
                More events
              </a>
            </p>
          </div>
        </div>
        <div
          className={
            toggleContent === 3
              ? "sidebar__content sidebar__content-active"
              : "sidebar__content"
          }
        >
          <div class="btn__login login" id="btn__login login"></div>

          <div class="btn__logout logout" id="btn__logout logout" hidden>
            <div className="loginnav">
              {loginitems.map((item, index) => (
                <LoginNav key={index} item={item} />
              ))}
            </div>
            <button onClick={(e) => handleSignOut(e)}> Sign out</button>
          </div>
        </div>
      </div>
      <div
        className={toggleMenu && "app__sidebar-overlay"}
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
