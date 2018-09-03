import React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

test('renders properly', () => {
  const { container } = render(<Button>Button label</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
