import React from 'react';
import { render } from 'react-testing-library';
import Input from './Input';

test.skip('renders properly', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});
