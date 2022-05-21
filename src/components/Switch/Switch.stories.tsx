import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { IToggleProps } from '@fluentui/react/lib/Toggle';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch
} as Meta<typeof Switch>;

const Template: Story<IToggleProps> = (args) => <Switch {...args}/>

export const Sample = Template.bind({});