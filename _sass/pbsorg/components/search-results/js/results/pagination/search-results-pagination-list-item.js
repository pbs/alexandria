'use strict';

import React, { PropTypes } from 'react';
import SearchOptionBase from '../../search-option-base';

const SearchPaginationListItem = ({onOptionClick, value, isSelected}) => {

  let customClasses = 'search-results__pagination-link';
  let ariaLabel = 'page ' + value + ' of search results';

  if (isSelected) {
    customClasses += ' search-results__pagination-link--selected';
    ariaLabel = 'You\'re currently on ' + ariaLabel;
  }

  return (
    <li className='search-results__pagination-list-item'>
      <button
        className={customClasses}
        aria-label={ariaLabel}
        onClick={(e) => onOptionClick(e)}
        value={value} >
        {value}
      </button>
    </li>
  );
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchPaginationListItem.propTypes = {
  value: PropTypes.number.isRequired,
  optionKey: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func,
  isSelected: PropTypes.bool
};

/**
 * @note don't pass any params to connect
 * because we don't want to
 */
export default SearchOptionBase(SearchPaginationListItem);
