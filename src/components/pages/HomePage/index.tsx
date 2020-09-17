import React from 'react';
import { Row, Col } from 'react-configurable-grid';
import styled from 'styled-components';

import Layout from '../../layout';

import Thumb from '../../core/Thumb';

const StyledThumbsWrapper = styled.div`
  margin: 40px 0;
  padding: 0 25px;
`;

const StyledCol = styled(Col)`
  position: relative;
`;

const HomePage: React.FC = () => (
  <Layout>
    <StyledThumbsWrapper>
      <Row>
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol> 
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>  
        <StyledCol xs={12} sm={4} xl={3}>
          <Thumb
          id={54545}
            src="https://pixabay.com/get/55e0d340485aa814f1dc84609629327f113dd7e05b4c704f752f78d79744c15e_640.jpg"
            title="flower"
          />
        </StyledCol>   
      </Row>
    </StyledThumbsWrapper>
  </Layout>
);

export default HomePage;
