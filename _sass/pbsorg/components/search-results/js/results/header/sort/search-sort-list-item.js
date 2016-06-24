'use strict';

import React, { PropTypes } from 'react';
import SearchOptionBase from '../../../search-option-base';

const SearchSortListItem = ({onOptionClick, value, label, isSelected}) => {

  let customClasses = 'search-sort__list-link';
  if (isSelected) {
    customClasses += ' search-sort__list-link--selected';
  }

  return (
    <li className='search-sort__list-item'>
      <button
        className={customClasses}
        aria-label={'Sort by ' + label}
        onClick={(e) => onOptionClick(e)}
        value={value} >
        {label}
      </button>
    </li>
  );

}

/**
 * Define required properties
 * and expected corresponding types
 */
SearchSortListItem.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

// wrap this component in higher order component
export default SearchOptionBase(SearchSortListItem);
