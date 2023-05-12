import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calculator } from './Calculator';

export default {
  title: 'pages/Calculator',
  component: Calculator,
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (args) => <Calculator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
