import * as React from 'react';
import { Meta, Story } from '@storybook/react'
import { ISearchBoxProps } from '@fluentui/react/lib/SearchBox';
import SearchInput from './SearchInput';

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta<typeof SearchInput>

const Template: Story<ISearchBoxProps> = (args) => <SearchInput {...args} />;

export const Sample = Template.bind({});
