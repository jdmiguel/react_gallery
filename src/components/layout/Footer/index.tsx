import React from 'react';
import { InView } from 'react-intersection-observer';

import { OBSERVER_OPTIONS } from '../../../helpers/constants';

export type FooterProps = {
  onViewFooter: () => void;
}

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
    <footer />
  </InView>
);

export default Footer;
