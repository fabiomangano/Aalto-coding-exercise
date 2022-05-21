import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer
} as Meta<typeof Footer>

const Template: Story = () => <Footer/>

export const Sample = Template.bind({});