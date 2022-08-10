import React from "react";
import { Link } from "react-router-dom";

function ButtonOptionMenu(props) {
  return (
    <li>
      <Link to={props.href} onClick={props.toggleMenu}>
        {props.icon} {props.name}
      </Link>
    </li>
  );
}

export default ButtonOptionMenu;
