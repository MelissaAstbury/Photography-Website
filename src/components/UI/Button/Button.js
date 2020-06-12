import React from "react";

import "./Button.scss";

const Button = (props) => {
  return <div className="btn">{props.children}</div>;
};

export default Button;
