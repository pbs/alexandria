'use strict';

import React from 'react';
import SearchInput from './search-input';
import SearchFilters from './filters/search-filters';

/**
 * Renders SearchHeader, a stateless functional component
 */
const SearchHeader = ({viewType}) => (

  <header className='search-header'>
    <SearchInput />
    {viewType === 'has-results' ?
      <SearchFilters /> :
      ''
    }

  </header>

);

export default SearchHeader;
