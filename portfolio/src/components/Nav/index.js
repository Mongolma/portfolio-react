import React from "react";
import {FaBars} from "react-icons/fa";
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./NavElement";

function NavBar() {
  return (
    <>
    <Nav>
      <NavContainer>
        <NavLogo to='/'>Logo</NavLogo>
       <MobileIcon>
           <FaBars />
       </MobileIcon>
      </NavContainer>
      <NavMenu>
          <NavItem>
              <NavLinks to='about'>About</NavLinks>
          </NavItem>
      </NavMenu>
    </Nav>
    </>
  );
}

export default NavBar;
