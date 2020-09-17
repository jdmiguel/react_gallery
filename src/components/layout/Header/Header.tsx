import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../core/Logo/Logo';

const StyledHeader = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const StyledHeaderClaim = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme.palette.LIGHT_MIN};
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 992px) {
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