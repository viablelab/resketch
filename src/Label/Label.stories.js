import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Label from './Label';

storiesOf('Label', module).add('Example', () => {
  return React.createElement(Label, {
    children: text('children', 'Label text'),
    emphasized: boolean('emphasized', false),
  });
});
