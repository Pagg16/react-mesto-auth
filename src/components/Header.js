import React from "react";
import logo from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img alt="логотип" className="header__logo" src={logo} />
    </header>
  );
}

export default Header;