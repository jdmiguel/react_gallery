import React from 'react';
import { render } from '@testing-library/react';

import Pill from '.';

import { renderWithTheme } from '../../../helpers/Theme';
import { Pill_TEXT_MOCKED } from '../../../helpers/mocks';

describe('Component: Pill', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme(
        <Pill text={Pill_TEXT_MOCKED} />
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
