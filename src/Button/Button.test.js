import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('renders properly', () => {
  const tree = renderer.create(<Button>Button label</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});
