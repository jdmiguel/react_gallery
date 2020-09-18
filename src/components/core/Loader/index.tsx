import React from 'react';
import styled, {keyframes, css} from 'styled-components';

export enum LoaderType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

type LoaderProps = {
  type?: LoaderType;
}

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

const StyledLoader = styled.div<{ type: LoaderType }>`
  display: block;
  width: 100%;
  height: 7px;
  background: 
    ${({type, theme}) => (type === LoaderType.DARK ? theme.palette.PRIMARY : theme.palette.LIGHT_MIN)};
  ${animation};
`;

const Loader:React.FC<LoaderProps> = ({ type = LoaderType.DARK }) => (
  <StyledLoaderWrapper>
    <StyledLoader type={type}/>
  </StyledLoaderWrapper>
);

export default Loader;
