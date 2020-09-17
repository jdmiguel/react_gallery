import React from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

import { OBSERVER_OPTIONS } from '../../../helpers/constants';

export type FooterProps = {
  onViewFooter: () => void;
}

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 25px 0;
  background-color: ${({theme}) => theme.palette.PRIMARY_DARK};
  display: flex;
  justify-content: center;
`;

const StyledText = styled.p`
  color: ${({theme}) => theme.palette.PRIMARY_LIGHT};
  font-size: 0.7rem;
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
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.palette.LIGHT_MAX};
  font-weight: 500;
  font-size: 0.7rem;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.palette.PRIMARY_MEDIUM};
  }
  margin-left: 3px;
  @media only screen and (min-width: 375px) {
    margin-left: 5px;
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer: React.FC<FooterProps> = ({ onViewFooter }) => (
  <InView
    {...OBSERVER_OPTIONS}
    as="div"
    onChange={(inView) => {
      if (inView) {
        onViewFooter();
      }
    }}
  >
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
  </InView>
);

export default Footer;
