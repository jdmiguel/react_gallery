import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Thumb from '.';

import { THUMB_PROPS_MOCKED } from '../../../helpers/mocks';
import { renderWithTheme } from '../../../helpers/Theme';

describe('Component: Thumb', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme( 
        <MemoryRouter>
          <Thumb {...THUMB_PROPS_MOCKED}/>
        </MemoryRouter>
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
