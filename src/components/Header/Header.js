import React from "react";

import NavItem from "../Header/NavItem/NavItem";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <h2>Nicole Amber Photography</h2>

        <ul>
          <NavItem link="/">Home</NavItem>
          <NavItem link="/">Work</NavItem>
          <NavItem link="/">About Me</NavItem>
          <NavItem link="/">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
