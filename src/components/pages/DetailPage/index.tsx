import React from 'react';
import styled from 'styled-components';

const StyledDetailPage = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

const DetailPage: React.FC = () => (
  <StyledDetailPage>
      <p>DetailPage</p>
  </StyledDetailPage>
);

export default DetailPage;