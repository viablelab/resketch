import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import './storybook.css';

const reqCss = require.context('../src', true, /\.css$/);
const reqStory = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  reqCss.keys().forEach(filename => reqCss(filename));
  reqStory.keys().forEach(filename => reqStory(filename));
}

setOptions({
  addonPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(centered);

configure(loadStories, module);
