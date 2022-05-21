import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import { Meta, Story } from '@storybook/react'
import { ReactPaginateProps } from 'react-paginate';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

const Template: Story<ReactPaginateProps> = (args) => <Pagination {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  breakLabel: "...",
  nextLabel: <Icon iconName="PageRight" />,
  previousLabel: <Icon iconName="PageLeft" />, marginPagesDisplayed: 1,
  pageRangeDisplayed: 3,
  pageCount: 10,
}
