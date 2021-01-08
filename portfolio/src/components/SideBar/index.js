import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SidebarLink, SideBarMenu} from "./SideBarElements"; 

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
             < CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SidebarLink to to='about'>About</SidebarLink>
                    <SidebarLink to to='projects'>Projects</SidebarLink>
                    <SidebarLink to to='contact'>Contact</SidebarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
      
    )
}

export default SideBar;
