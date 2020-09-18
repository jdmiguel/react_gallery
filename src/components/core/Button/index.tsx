import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode | string;
  onClick?: () => void;
};

const StyledButton = styled.button`
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.palette.DARK_MAX};
  color: ${({ theme }) => theme.palette.PRIMARY_LIGHT};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.palette.LIGHT_MAX};
  }
  i{
    margin-right: 5px;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton
    onClick={() => {
      onClick && onClick();
    }}
  >
    {children}
  </StyledButton>
);

export default Button;
