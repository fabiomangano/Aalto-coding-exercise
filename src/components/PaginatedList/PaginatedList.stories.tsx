import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PaginatedList from './PaginatedList';

export default {
  title: 'PaginatedList',
  component: PaginatedList,
  decorators: [
    (Story) => (
      <div style={{maxWidth: '830px'}}>
        <Story/>
      </div>
    )
  ],
} as Meta<typeof PaginatedList>

const Template: Story = (args) => <PaginatedList {...args}/>

export const Sample = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {fluid: true}