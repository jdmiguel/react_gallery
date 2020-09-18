import React from 'react';
import styled from 'styled-components';

type PillProps = {
  text: string;
};

const StyledPill = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  background-color: ${({ theme }) => theme.palette.PRIMARY};
  color: ${({ theme }) => theme.palette.PRIMARY_DARK};
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const Pill: React.FC<PillProps> = ({ text }) => (
  <StyledPill>
    {text}
  </StyledPill>
);

export default Pill;