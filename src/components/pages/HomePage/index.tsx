import React from 'react';
import styled from 'styled-components';

import Layout from '../../layout';

const StyledHomePage = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

const HomePage: React.FC = () => (
  <StyledHomePage>
    <Layout>
      <p>HomePage</p>
    </Layout>
  </StyledHomePage>
);

export default HomePage;
