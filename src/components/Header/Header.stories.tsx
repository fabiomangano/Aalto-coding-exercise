import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header
} as Meta<typeof Header>

const Template: Story = () => <Header/>

export const Sample = Template.bind({});