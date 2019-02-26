import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';

import '@resketch/css';
import './storybook.css';

function loadStories() {
  require('../stories.js');
}

const options = {
  addonPanelInRight: true,
};

addDecorator(withOptions(options));
addDecorator(withKnobs);
addDecorator(centered);

configure(loadStories, module);
