import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module).add('Example', () => {
  return React.createElement(Button, {
    children: text('children', 'Click Me'),
    disabled: boolean('disabled', false),
    look: select('look', [null, 'ghost', 'text']) || undefined,
  });
});
