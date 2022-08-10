import React from "react";
import { Link } from "react-router-dom";

function ButtonOption(props) {
  return (
    <Link
      to={props.href}
      className={props.className}
      onClick={() => {
        localStorage.setItem("token", "");
      }}
    >
      {props.text}
    </Link>
  );
}

export default ButtonOption;
