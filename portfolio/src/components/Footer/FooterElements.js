import styled from 'styled-components';

export const FooterContainer = styled.footer`
background-color: #101522;
height: 80px;

@media screen and (max-width: 768px) {
     height: 80px;
    margin-top: 500px;
}
@media screen and (max-width: 480px) {
    // height: 1300px;
    // margin-top: 500px;
}
`;

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`;

export const FooterLinkWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
display: flex; 
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: center;
box-sizing: border-box;
color:#fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;


export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
margin: 24px;

`;