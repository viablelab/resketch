import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';

import '../css/main.css';
import './storybook.css';

const reqStory = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  reqStory.keys().forEach(filename => reqStory(filename));
}

setOptions({
  addonPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(centered);

configure(loadStories, module);
