import React from 'react';
import { render } from 'react-testing-library';
import Switch from './Switch';

test.skip('renders properly', () => {
  const { container } = render(<Switch />);
  expect(container.firstChild).toMatchSnapshot();
});
