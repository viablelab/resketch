import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Switch,
} from '@resketch/react';

storiesOf('Button', module).add('Example', () => {
  return React.createElement(Button, {
    children: text('children', 'Click Me'),
    disabled: boolean('disabled', false),
    look: select('look', [null, 'ghost', 'text']) || undefined,
  });
});

storiesOf('Checkbox', module).add('Example', () => {
  const props = {
    disabled: boolean('disabled', false),
  };
  return <Checkbox {...props}>Toggle me</Checkbox>;
});

storiesOf('Input', module).add('Example', () => {
  return React.createElement(Input, {
    disabled: boolean('disabled', false),
    placeholder: text('placeholder', 'Placeholder text'),
  });
});

storiesOf('Radio', module).add('Example', () => {
  const props = {
    disabled: boolean('disabled', false),
  };
  return <Radio {...props}>Toggle me</Radio>;
});

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

storiesOf('Switch', module).add('Example', () => {
  const props = {
    disabled: boolean('disabled', false),
  };
  return <Switch {...props}>Toggle me</Switch>;
});
