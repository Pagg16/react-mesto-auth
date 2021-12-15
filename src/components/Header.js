import React from "react";
import logo from "../images/Vector.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  function signOut() {
    props.setLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  const { pathname } = useLocation();

  const path = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

  const textPath = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;

  return (
    <header className="header">
      <img alt="логотип" className="header__logo" src={logo} />
      {props.loggedIn ? (
        <div className="header__email-text">
          <p className="header__navigation">{props.email}</p>
          <button
            className="header__navigation-button"
            to="/sign-in"
            onClick={signOut}
          >
            Выйти
          </button>
        </div>
      ) : (
        <Link to={path} className="header__navigation">
          {textPath}
        </Link>
      )}
    </header>
  );
}

export default Header;
