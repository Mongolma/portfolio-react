import React from "react";
import {FaBars} from "react-icons/fa";
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./NavElement";

const NavBar = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavContainer>
        <NavLogo to='/'>Logo</NavLogo>
       <MobileIcon onClick={toggle}>
           <FaBars />
       </MobileIcon>
      </NavContainer>
      <NavMenu>
          <NavItem>
              <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
      </NavMenu>
    </Nav>
    </>
  );
}

export default NavBar;
