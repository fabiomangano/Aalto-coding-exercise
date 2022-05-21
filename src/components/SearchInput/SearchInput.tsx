import * as React from  'react';
import { SearchBox, ISearchBoxProps as ISearchInputProps } from '@fluentui/react/lib/SearchBox';
import searchSvg from '../../assets/images/search-icon-2.svg';
import style from './SearchInput.module.scss';

const SearchInput: React.FC<ISearchInputProps> = (props) => {
  return (
    <SearchBox
        className={style['ms-SearchBox-root']}
        iconProps={{
          imageProps: {
            src: searchSvg,
            alt: 'Search Icon',
          }
        }}
        {...props}
      />
  )
}

export default SearchInput;
