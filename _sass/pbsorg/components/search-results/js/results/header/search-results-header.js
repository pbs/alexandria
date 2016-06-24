'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchSort from './sort/search-sort';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    count: state.results.count
  };
};

/**
 * Renders SearchResults, a presentational component.
 */
const SearchResultsHeader = ({count}) => (

  <header className='search-results__header'>
    <h1 className='search-results__header-title'>
      {count} Results
    </h1>
    <SearchSort />
  </header>

);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsHeader.propTypes = {
  count: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps
)(SearchResultsHeader);

