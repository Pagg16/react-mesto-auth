import React from "react";

function –°hickenburerMenu(props) {
  return (
    <div
      className={`header__burger-menu ${
        props.activeBurger ? "header__burger-menu_active" : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default –°hickenburerMenu;
