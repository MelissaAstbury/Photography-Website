import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <div onClick={props.clicked} className="btn">
      {props.children}
    </div>
  );
};

export default Button;
