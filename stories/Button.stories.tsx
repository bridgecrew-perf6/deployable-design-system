import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
    },
    children: {
      defaultValue: 'Default button',
    },
  },
  decorators: [withDesign],
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
};
