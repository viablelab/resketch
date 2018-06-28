import React from 'react';
import renderer from 'react-test-renderer';
import Collapsible from './Collapsible';

test('renders properly', () => {
  const rendered = renderer.create(
    <Collapsible title="Title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        labore neque, ab iste! Necessitatibus debitis alias est quisquam unde
        iste hic cupiditate earum, quis itaque eligendi voluptatem. Ea,
        laudantium, deserunt.
      </p>
    </Collapsible>
  );
  const instance = rendered.root;

  expect(rendered.toJSON()).toMatchSnapshot();

  instance.findByType('button').props.onClick();
  expect(rendered.toJSON()).toMatchSnapshot();
});
