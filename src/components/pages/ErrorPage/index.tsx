import React from 'react';
import styled from 'styled-components';

const StyledPageErrorWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledErrorText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  @media only screen and (min-width: 500px) {
    font-size: 2rem;
  }
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  margin-left: 5px;
  @media only screen and (min-width: 500px) {
    font-size: 2rem;
  }
`;

const PageError = () =>   (
  <StyledPageErrorWrapper>
      <StyledErrorText> Error 404 |</StyledErrorText>
      <StyledText> Page Not Found </StyledText>
  </StyledPageErrorWrapper>
); 

export default PageError;