import * as React from 'react';
import { Dropdown, IDropdownProps } from '@fluentui/react/lib/Dropdown';
import arrowDown from '../../assets/images/arrow-down.svg';
import style from './MultiSelect.module.scss';

const MultiSelect: React.FC<IDropdownProps> = (props) => {
  const onRenderCaretDown = () => <img src={arrowDown} alt="Arrow Down" />;

  return (
    <Dropdown
      className={style['ms-Dropdown-container']}
      onRenderCaretDown={onRenderCaretDown}
      {...props}
    />
  );
};

export default MultiSelect;
