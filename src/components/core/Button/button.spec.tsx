import React from 'react';
import { render } from '@testing-library/react';

import Button from '.';

import { renderWithTheme } from '../../../helpers/Theme';
import { BUTTON_TEXT_MOCKED } from '../../../helpers/mocks';

describe('Component: Button', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme(
        <Button>
          { BUTTON_TEXT_MOCKED }
        </Button>
      )
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
