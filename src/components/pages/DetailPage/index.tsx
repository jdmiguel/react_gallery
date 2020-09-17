import React from 'react';
import styled from 'styled-components';

import Layout from '../../layout';

const StyledDetailPage = styled.div`
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

const DetailPage: React.FC = () => (
  <StyledDetailPage>
    <Layout>
      <p>DetailPage</p>
    </Layout>
  </StyledDetailPage>
);

export default DetailPage;