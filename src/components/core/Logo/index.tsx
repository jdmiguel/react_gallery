import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color:  ${({theme}) => theme.palette.PRIMARY_LIGHT};
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Logo: React.FC = () => (
  <StyledLogo>
    React Gallery
  </StyledLogo>
);

export default Logo;