import React from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

import { OBSERVER_OPTIONS } from '../../../helpers/constants';

type FooterProps = {
  onViewFooter: () => void;
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 1rem;
  color: ${({theme}) => theme.palette.DARK_MIN};
`;

const Footer: React.FC<FooterProps> = ({ onViewFooter }) => (
  <InView
    {...OBSERVER_OPTIONS}
    as="div"
    onChange={(inView) => {
      if (inView) {
        onViewFooter();
      }
    }}
  >
    <StyledFooter>
      All rights reserved © 2020
    </StyledFooter>
  </InView>
);

export default Footer;
