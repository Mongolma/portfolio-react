import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SidebarLink, SideBarMenu} from "./SideBarElements"; 

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
             < CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
      
    )
}

export default SideBar;
