import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import AppLayout, { IAppLayoutProps } from './AppLayout';

export default {
  title: 'AppLayout',
  component: AppLayout
} as Meta<typeof AppLayout>;

const Template: Story<IAppLayoutProps> = (args) => <AppLayout {...args}/>

export const Sample = Template.bind({});