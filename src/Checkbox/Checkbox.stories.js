import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module).add('Example', () => {
  const props = {
    disabled: boolean('disabled', false),
  };

  return <Checkbox {...props}>Toggle me</Checkbox>;
});
