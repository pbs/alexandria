'use strict';

import React, { Component, PropTypes } from 'react';
import SearchFiltersListItem from './search-filters-list-item';
import _isEqual from 'lodash.isequal';

class SearchFiltersList extends Component {

  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   */
  shouldComponentUpdate(newProps) {

    const { filter } = newProps;

    // if filter hasn't changed, don't re-render
    if (_isEqual(filter, this.props.filter)) {
      return false;
    }

    return true;
  }

  /**
   * Renders search filter basic list markup.
   */
  render() {

    const { filter, filterKey } = this.props;
    const list = [];

    // get filter options
    if (filter && filter.options) {

      // for each filter option, render list item
      filter.options.map((option, index) => {
        if (option.count > 0) {
          list.push(
            <SearchFiltersListItem
              key={index}
              label={option.label}
              val={option.value}
              filterKey={filterKey} />
          );
        }

      });
    }

    return (
      <ul className='search-filters__list search-filters__list--by-type'>
        {list}
      </ul>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchFiltersList.propTypes = {
  filterKey: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired
};

export default SearchFiltersList;
