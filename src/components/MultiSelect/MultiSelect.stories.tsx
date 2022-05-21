import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { IDropdownProps } from '@fluentui/react/lib/Dropdown';
import MultiSelect, {} from './MultiSelect';

export default {
  title: 'MultiSelect',
  component: MultiSelect
} as Meta<typeof MultiSelect>

const Template: Story<IDropdownProps> = (args) => <MultiSelect {...args}/>

export const Sample = Template.bind({});