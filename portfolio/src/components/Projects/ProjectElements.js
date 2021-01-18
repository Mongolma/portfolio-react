import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ProjectContainer = styled.div`
height: 800px;
display: flex;
margin-top: 64px;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media screen and (max-width: 768px) {
    height: 1100px;
}
@media screen and (max-width: 480px) {
    height: 1300px;
}
`;

export const ProjectWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;
  export const ProjectLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  `;
export const ProjectCard = styled.div`
backgroud: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
border-radius:  10px;
max-height: 340px;
padding: 30px;

box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ProjectImage = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
font-size: 2.5rem;

color: #010606;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`; 

export const ProjectH2 = styled.h2`
font-size: 1rem;
color: #010606;
text-align: center;
align-items: center;
justify-content: center;

`;

export const ProjectP = styled.p`
font-size: 1rem;
// text-align: center;
color: #010606;
text-decoration: none;
`;