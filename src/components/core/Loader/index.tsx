import React from 'react';
import styled, {keyframes, css} from 'styled-components';

const move = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const animation = css`
  animation: ${move} 1.5s linear infinite forwards;
`

const StyledLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const StyledLoader = styled.div`
  display: block;
  width: 100%;
  height: 7px;
  background: ${({theme}) => theme.palette.PRIMARY};
  ${animation};
`;

const Loader:React.FC = () => (
  <StyledLoaderWrapper>
    <StyledLoader />
  </StyledLoaderWrapper>
);

export default Loader;
