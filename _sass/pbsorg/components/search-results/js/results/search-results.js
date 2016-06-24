'use strict';

import React from 'react';
import SearchResultsMain from './search-results-main';
import SearchResultsRightRail from './right-rail/search-results-right-rail';

/**
 * Renders SearchResults, a stateless functional component
 */
const SearchResults = () => (

  <section className='search-results-section'>
    <SearchResultsMain />
    <SearchResultsRightRail />
  </section>

);

export default SearchResults;
