import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Toggle from './Toggle';
import Label from '../Label/Label';

storiesOf('SelectionControls', module)
  .add('Radio', () => {
    const props = {
      checked: boolean('checked', false),
      children: text('children', 'Label text'),
      disabled: boolean('disabled', false),
      id: 'test',
      name: 'test',
      onChange: () => {},
    };

    return <Radio {...props} />;
  })
  .add('Checkbox', () => {
    const props = {
      checked: boolean('checked', false),
      children: text('children', 'Label text'),
      disabled: boolean('disabled', false),
      id: 'test',
      name: 'test',
      onChange: () => {},
    };

    return <Checkbox {...props} />;
  })
  .add('Toggle (w/ Label)', () => {
    const toggleProps = {
      disabled: boolean('disabled', false, 'Toggle'),
      id: 'test',
      onChange: () => {},
      toggled: boolean('toggled', false, 'Toggle'),
    };
    const labelProps = {
      children: text('children', 'Label text', 'Label'),
      htmlFor: 'test',
      style: { marginRight: '2em' },
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Label {...labelProps} />
        <Toggle {...toggleProps} />
      </div>
    );
  });
