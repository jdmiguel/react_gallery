import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Header from '.';

import { renderWithTheme } from '../../../helpers/Theme';

describe('Component: Header', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme( 
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
