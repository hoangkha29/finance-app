import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

export default {
  title: 'pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
