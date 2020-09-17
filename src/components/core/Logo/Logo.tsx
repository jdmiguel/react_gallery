import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 2rem;
`;

const Logo: React.FC = () => (
  <StyledLogo>
    React Gallery
  </StyledLogo>
);

export default Logo;