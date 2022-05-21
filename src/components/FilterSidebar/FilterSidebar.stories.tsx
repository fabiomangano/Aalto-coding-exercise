import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FilterSidebar, { IFilterSidebarProps } from './FilterSidebar';

export default {
  title: 'FilterSidebar',
  component: FilterSidebar
} as Meta<typeof FilterSidebar>

const Template: Story<IFilterSidebarProps> = (args) => <FilterSidebar {...args}/>

export const Sample = Template.bind({});

Sample.args = {
  title: "FILTERS"
}