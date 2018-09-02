import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Input', module).add('Example', () => {
  return React.createElement(Input, {
    disabled: boolean('disabled', false),
    placeholder: text('placeholder', 'Placeholder text'),
  });
});
