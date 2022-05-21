import React from 'react';
import { IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';
import SidePanel from '../../components/SidePanel';
import FilterSidebar from '../../components/FilterSidebar';
import PaginatedList from '../../components/PaginatedList';
import useMediaQuery from '../../hooks/useMediaQuery';
import style from './Home.module.scss';


const Home: React.FC = () => {
  const [completed, setCompleted] = React.useState(false);
  const [inserted, setInserted] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ids, setIds] = React.useState<number[]>([]);
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  const isLargeScreen = useMediaQuery('(max-width: 1280px)');
  const isBigScreen = useMediaQuery('(min-width: 1180px)');

  const handleSearchTerm = () => setSearchTerm(inserted)

  const handleDeleteInserted = () => setInserted('')

  const handleInsertTerm = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target)
      setInserted(event?.target.value);
  }

  const handleToggleCompleted = () => {
    setCompleted(!completed);
    setSearchTerm(inserted);
  };

  const handleResetFilters = () => {
    setCompleted(false);
    setSearchTerm('');
    setInserted('');
    setIds([]);
  };

  const handleSelectIds = (e: React.FormEvent<HTMLDivElement>, option: IDropdownOption<any> | undefined) => {
    if (option) {
      setIds(
        option.selected ? [...ids, option.key as number] : ids.filter(key => key !== option.key),
      );
    }
  };

  const filters = {
    searchTerm, ids, completed
  }

  const renderSidebar = () => {
    return (
      <FilterSidebar
        title="FILTERS"
        onResetFilters={handleResetFilters}
        onSearchTerm={handleSearchTerm}
        onInsertTerm={handleInsertTerm}
        onToggleCompleted={handleToggleCompleted}
        onSelectIds={handleSelectIds}
        onDeleteInserted={handleDeleteInserted}
        inserted={inserted}
        completed={completed}
        ids={ids}
      />
    )
  }

  return ((
    <div className={style['home']}>
      <div className={style['content']}>
        <div className={style['filter-sidebar-container']}>
          {isBigScreen && renderSidebar()}
          {!isBigScreen && (
            <>
            <SidePanel
              isOpen={isOpen}
              onDismiss={dismissPanel}
            >
              {renderSidebar()}
            </SidePanel>
              <div className={style['button-filters-container']}>
                <DefaultButton text="Filters" onClick={openPanel} className={style['ms-Button']} />
              </div>

          </>
          )}
        </div>
        <div className={style['paginated-list-container']}>
          <PaginatedList filters={filters} fluid={isLargeScreen} />
        </div>
      </div>
    </div>
  ))
};

export default Home;
