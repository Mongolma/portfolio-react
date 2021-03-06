import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @mediascreen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
margin-top: 24px;

// &:hover{
//     color: #01bf71;
//     transition: 0.2s ease-in-out;
// }
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -16px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
life-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
//height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}

&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`;