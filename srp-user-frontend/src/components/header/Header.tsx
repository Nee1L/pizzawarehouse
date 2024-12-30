import { useAuth0 } from "@auth0/auth0-react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.jpg";
import "./header.css";

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <header className="css.header">
      <div className="container header-container">
        <div className="header__left">
          <Link to="/" className="header__logo">
            <img src={Logo} />
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-li">
                <a href="#">Projects</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Project 1</a>
                  </li>
                  <li>
                    <a href="#">Project 2</a>
                  </li>
                  <li>
                    <a href="#">Project 2</a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a href="#">New projects</a>
                  </li>
                  <li>
                    <a href="#">Recommended projects</a>
                  </li>
                  <li>
                    <a href="#">Search projects</a>
                  </li>
                  <li>
                    <a href="#">Search projects by categories</a>
                  </li>
                </ul>
              </li>
              <li className="header__nav-li">
                <Link to="/vacancies">Vacancies</Link>
              </li>
              <li className="header__nav-li">
                <Link to="/specialists">Specialists</Link>
              </li>
              <li className="header__nav-li">
                <Link to="/education">Education</Link>
              </li>
              <li className="header__nav-li">
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__actions">
          <input type="text" placeholder="Search" className="header__search" />
          {isAuthenticated ? (
            <>
              <button className="header__share">Share the project</button>
              <button><NotificationsNoneIcon /></button>
              <img src={user.picture} alt="User" className="header__avatar" />
            </>
          ) : (
            <>
              <button className="bell"><NotificationsNoneIcon /></button>
              <button
                className="header__login"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
              <button
                className="header__register"
                onClick={() => loginWithRedirect({ screen_hint: "signup" })}
              >
                Registration
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// const postSearchContent = (
//   <>
//     <img src={bellIcon} alt="bell" />
//     <img src={Profile} alt="profile" />
//     <button className="header__login">Login</button>
//     <button className="header__register">Register</button>
//   </>
// );

// const postSearchContent = (
//   <>
//      <img src={bellIcon} alt="bell" />
//      <button className="header__login">Login</button>
//      <button className="header__register">Registration</button>
//   </>
// );
