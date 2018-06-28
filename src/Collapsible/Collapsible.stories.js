import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Collapsible from './Collapsible';

storiesOf('Collapsible', module)
  .add('single', () => (
    <Collapsible title="What is going on?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea hic enim
      veniam aliquid facilis sit, assumenda, iusto soluta dolore explicabo
      voluptatem id nobis ex placeat nihil a ipsum obcaecati.
    </Collapsible>
  ))
  .add('multiple', () => (
    <Fragment>
      <Collapsible title="Item A">
        Lorem ipsum dolor sit amet, consectetur ...
      </Collapsible>
      <Collapsible title="Item B">
        Lorem ipsum dolor sit amet, consectetur ...
      </Collapsible>
      <Collapsible title="Item C">
        Lorem ipsum dolor sit amet, consectetur ...
      </Collapsible>
    </Fragment>
  ));
