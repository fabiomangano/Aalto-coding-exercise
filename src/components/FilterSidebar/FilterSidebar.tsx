import * as React from 'react';
import { IDropdownOption } from '@fluentui/react/lib/Dropdown';
import Switch from '../Switch';
import SearchInput from '../SearchInput';
import MultiSelect from '../MultiSelect';
import useUserIds from './hooks/useUsersIds';
import style from './FilterSidebar.module.scss';
export interface IFilterSidebarProps {
  title: string,
  inserted: string;
  completed: boolean;
  ids: number[];
  onSearchTerm: () => void;
  onInsertTerm: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleCompleted: () => void;
  onSelectIds: (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption<any> | undefined) => void;
  onResetFilters: () => void;
  onDeleteInserted: () => void;
}

const FilterSidebar: React.FC<IFilterSidebarProps> = (props) => {
  const {
    title,
    onSearchTerm,
    onToggleCompleted,
    onSelectIds,
    onResetFilters,
    onInsertTerm,
    inserted,
    completed,
    ids,
    onDeleteInserted } = props;

  const USERS_URL = `https://jsonplaceholder.typicode.com/users`;

  const { userIds } = useUserIds(USERS_URL);

  const options: IDropdownOption[] = userIds.map(id => ({ key: id, text: id }));

  return (
    <div className={style['filter-sidebar']}>
      {title && <h3 className={style['title']}>{title}</h3>}
      <div className={style['search-input-container']}>
        <SearchInput
          onSearch={onSearchTerm}
          onChange={onInsertTerm}
          value={inserted}
          onClear={onDeleteInserted} showIcon
          disableAnimation
          placeholder="Search..." />
      </div>
      <div className={style['switch-container']}>
        <Switch
          onChange={onToggleCompleted}
          checked={completed}
          label="COMPLETED"
          onText="SI"
          offText="NO" />
      </div>
      <div className={style['multiselect-container']}>
        <MultiSelect
          options={options}
          onChange={onSelectIds}
          selectedKeys={ids}
          label="SELECT USER ID"
          multiSelect
          ariaLabel="User ids"
        />
      </div>
      <button className={style['button-filter']} onClick={onResetFilters}>
        Reset Filters
     </button>
    </div>
  );
};

export default FilterSidebar;