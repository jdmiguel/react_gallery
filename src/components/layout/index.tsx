import React from "react";
import styled from 'styled-components';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const StyledMain = styled.main`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 60px;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledLayout>
);

export default Layout;
