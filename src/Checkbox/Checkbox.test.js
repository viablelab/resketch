import React from 'react';
import { render } from 'react-testing-library';
import Checkbox from './Checkbox';

test.skip('renders properly', () => {
  const { container } = render(<Checkbox />);
  expect(container.firstChild).toMatchSnapshot();
});
