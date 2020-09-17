import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 25px 0;
  background-color: ${(props) => props.theme.palette.SECONDARY};
  display: flex;
  justify-content: center;
`;

const StyledText = styled.p`
  color: ${(props) => props.theme.palette.LIGHT_MEDIUM};
  font-size: 0.8rem;
  &:not(:first-of-type) {
    margin-left: 5px;
    @media only screen and (min-width: 375px) {
      margin-left: 7px;
    }
  }
  &:not(:last-of-type) {
    &:after {
      content: ' | ';
      margin-left: 3px;
      @media only screen and (min-width: 375px) {
        margin-left: 5px;
      }
    }
  }
  &:last-of-type {
    margin-right: 1px;
    @media only screen and (min-width: 375px) {
      margin-right: 3px;
    }
  }
  @media only screen and (min-width: 375px) {
    font-size: 0.9rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.palette.PRIMARY};
  font-weight: 500;
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.palette.PRIMARY_MEDIUM};
  }
  margin-left: 3px;
  @media only screen and (min-width: 375px) {
    margin-left: 5px;
    font-size: 0.9rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledText>REACT GALLERY</StyledText>
    <StyledText>
      REPO ON 
      <StyledLink href="https://github.com/jdmiguel/react-gallery" target="_blank">
        GITHUB
      </StyledLink>
    </StyledText>
    <StyledText>
      BY
      <StyledLink href="https://jdmiguel.netlify.app" target="_blank">
        JDMIGUEL
      </StyledLink>
    </StyledText>
  </StyledFooter>
);

export default Footer;
