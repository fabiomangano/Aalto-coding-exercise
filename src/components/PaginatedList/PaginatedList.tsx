import React from 'react';
import classnames from 'classnames';
import ListHeader from './ui/ListHeader';
import ListItem from './ui/ListItem';
import Pagination from '../Pagination';
import useTodos from './hooks/useTodos';
import { Todo } from '../../models';
import { TodosFilters } from './types'
import { Icon } from '@fluentui/react/lib/Icon';
import style from './PaginatedList.module.scss';
interface IPaginatedListProps {
  filters?: TodosFilters;
  fluid?: boolean;
};

const PaginatedList: React.FC<IPaginatedListProps> = (props) => {
  const { filters, fluid = false } = props;

  const PAGE_SIZE = 5;
  const { currentTodos, isLoading, setOffset, pageCount } = useTodos(PAGE_SIZE, filters);

  const handlePageChange = (event: any) => {
    setOffset(event.selected * PAGE_SIZE)
  };

  const NoItems = () => <div>No items</div>;

  const IsLoading = () => <div>Loading items ...</div>;

  return (
    <div className={ classnames([style['paginated-list'], {
        [style['is-fluid']]: fluid
      }])}>
      <div className={style['list-items']}>
        <ListHeader />
        {isLoading && <IsLoading />}
        {(!isLoading && currentTodos.length > 0) ?
          currentTodos.map((item: Todo) => <ListItem key={item.id} item={item} />) : <NoItems />
        }
      </div>
      <div className={ classnames(
        [style['pagination-container'], {
          [style['is-fixed']]: fluid
        }])}>
        <Pagination
          breakLabel="..."
          nextLabel={<Icon iconName="PageRight" />}
          previousLabel={<Icon iconName="PageLeft" />}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
};

export default PaginatedList;