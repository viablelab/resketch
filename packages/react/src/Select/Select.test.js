import React from 'react';
import { render } from 'react-testing-library';
import Select from './Select';

test.skip('renders properly', () => {
  const { container } = render(<Select />);
  expect(container.firstChild).toMatchSnapshot();
});
