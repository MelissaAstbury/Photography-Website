import React from "react";

import NavItem from "../Header/NavItem/NavItem";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <h2>Melissa Jade Photography</h2>

          <ul>
            <NavItem link="/">Home</NavItem>
            <NavItem link="/aboutme">About Me</NavItem>
            <NavItem link="/">Contact</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
