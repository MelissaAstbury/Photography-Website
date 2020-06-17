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
            <NavItem link="/" exact>
              Home
            </NavItem>
            <NavItem link="/aboutme" exact>
              About Me
            </NavItem>
            <NavItem link="/contact" exact>
              Contact
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
