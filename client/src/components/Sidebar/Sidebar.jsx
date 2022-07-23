import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./Sidebar.css";
import menuitems from '../../constants/sidebar.json'
import NewsNav from "./Content/NewsNav/NewsNav";
import MenuNav from "./Content/MenuNav/MenuNav";

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
    let userObject = jwt_decode(response.credential);
    console.log(userObject.email);
    const mailPath = userObject.email.split("@")[1];
    if (mailPath === "vnuk.edu.vn") {
      setLogin(true);
      setUser(userObject);
      document.getElementById("btn__login login").hidden = true;
      document.getElementById("btn__logout logout").hidden = false;
    }
  }

  function handleSignOut(event) {
    console.log(student);
    setLogin(false);
    setUser({});
    setStudent({});
    document.getElementById("btn__login login").hidden = false;
    document.getElementById("btn__logout logout").hidden = true;
  }

  useEffect(() => {
    if (login) {
      const getStudent = async () => {
        const res = await axios.get(
          "http://localhost:5000/students/studentEmail/" + user.email
        );
        setStudent(res.data[0]);
        console.log(student);
      };
      getStudent();
    }
  }, [student, user]);

  useEffect(() => {
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
              { menuitems.map((item, index) => <MenuNav key={index} item={item}/>)}
            </div>
          </div>
          <div className="sidebar__menu-sub">

          </div>
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
            <NewsNav />
            <p>More news</p>
          </div>
          <div className="sidebar__events">
            <h1 className="sidebar__events-title">Upcoming Events</h1>
            <NewsNav />
            <NewsNav />
            <NewsNav />
            <p>More events</p>
          </div>
        </div>
        <div
          className={
            toggleContent === 3
              ? "sidebar__content sidebar__content-active"
              : "sidebar__content"
          }
        >
          Login - Logout
          <div class="btn__login login" id="btn__login login"></div>
          <button
            class="btn__logout logout"
            id="btn__logout logout"
            onClick={(e) => handleSignOut(e)}
            hidden
          >
            {" "}
            Sign out
          </button>
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
