import React from 'react';
import { render } from '@testing-library/react';

import Loader, { LoaderType } from '.';

import { renderWithTheme } from '../../../helpers/Theme';

describe('Component: Loader', () => {
  it('should render dark version', () => {
    const { container } = render(
      renderWithTheme(<Loader />)
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render light version', () => {
    const { container } = render(
      renderWithTheme(<Loader type={LoaderType.LIGHT}/>)
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
