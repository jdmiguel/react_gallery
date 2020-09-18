import React from 'react';
import { render } from '@testing-library/react';

import Photo from '.';

import { renderWithTheme } from '../../../helpers/Theme';
import { PHOTO_PROPS_MOCKED } from '../../../helpers/mocks';

describe('Component: Photo', () => {
  it('should render', () => {
    const { container } = render(
      renderWithTheme(<Photo {...PHOTO_PROPS_MOCKED}/>)
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
