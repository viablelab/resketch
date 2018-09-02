import React from 'react';
import { render } from 'react-testing-library';
import Input from './Input';

test('renders properly', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});
