'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchSortList from './search-sort-list';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    sortLabel: state.sort.label
  };
};

/**
 * Renders SearchSort, a presentational component.
 */
const SearchSort = ({sortLabel}) => (

  <div className='search-sort'>
    <h2 className='search-sort__title'>{sortLabel}</h2>
    <SearchSortList />
  </div>

);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchSort.propTypes = {
  sortLabel: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(SearchSort);

