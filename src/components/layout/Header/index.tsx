import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../core/Logo';

import BgHeader from './gallery.jpg';

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BgHeader});
  background-size: cover;
  background-color: ${({theme}) => theme.palette.PRIMARY_DARK};
  background-position: 70%;
  background-blend-mode: multiply;
`;

const StyledHeaderClaim = styled.h2`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 400;
  color:  ${({theme}) => theme.palette.LIGHT_MIN};
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Header: React.FC = () => (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <StyledHeaderClaim>Find out all the images you can imagine!</StyledHeaderClaim>
    </StyledHeader>
);

export default Header;