import React from 'react';
import { render } from 'react-testing-library';
import Radio from './Radio';

test('renders properly', () => {
  const { container } = render(<Radio />);
  expect(container.firstChild).toMatchSnapshot();
});
