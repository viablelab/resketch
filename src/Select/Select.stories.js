import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Select from './Select';

storiesOf('Select', module).add('Example', () => {
  const props = {
    block: boolean('block', false),
    disabled: boolean('disabled', false),
  };

  return (
    <Select {...props}>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">THREE</option>
    </Select>
  );
});
