import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Radio from './Radio';

storiesOf('Radio', module).add('Example', () => {
  const props = {
    disabled: boolean('disabled', false),
  };

  return <Radio {...props}>Toggle me</Radio>;
});
