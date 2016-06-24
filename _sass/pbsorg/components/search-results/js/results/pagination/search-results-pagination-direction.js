'use strict';

import React, { PropTypes } from 'react';
import SearchOptionBase from '../../search-option-base';

const SearchPaginationDirection = ({onOptionClick, value, label, direction}) => (
  <button
    className={'search-results__pagination-direction search-results__pagination-direction--' + direction}
    aria-label={label + ' page of search results'}
    onClick={(e) => onOptionClick(e)}
    value={value}>
    {label}
  </button>
);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchPaginationDirection.propTypes = {
  value: PropTypes.number.isRequired,
  optionKey: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func
};

// wrap in higher order component
export default SearchOptionBase(SearchPaginationDirection);
