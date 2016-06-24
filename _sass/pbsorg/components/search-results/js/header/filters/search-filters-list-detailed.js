'use strict';

import React, { Component, PropTypes } from 'react';
import SearchFiltersListItem from './search-filters-list-item';
import $ from 'jquery';

require('../../../../../scripts/jquery.pbs.cookie.js');

class SearchFiltersDetailedList extends Component {

  /**
   * Logic to show correct MVOD label.
   * @param {string} label - current label
   * @returns {string} label - updated label
   * @todo: remove/simplify when we get data from content service
   */
  getMVODLabel(label, filterVal) {

    const localizedStation = $.cookie('pbsol.common.name');
    let updatedLabel = label;

    if (filterVal === 'mvod') {

      // if it's MVOD, add label
      updatedLabel = 'Passport Videos';

      // if it's MVOD and user is localized
      // prepend with station
      if (localizedStation) {
        updatedLabel = localizedStation + ' | ' + updatedLabel;
      }

    } else {

      // if non-MVOD or 'free-to-view', add label
      updatedLabel = 'Non-Passport Videos';

      // if it's non-MVOD and user is localized,
      // add station and update quotes
      if (localizedStation) {
        updatedLabel = updatedLabel.replace('-Passport', ' \'' + localizedStation + ' | Passport\'');
      }

    }
    return updatedLabel;
  }

  /**
   * Renders search filter detailed list markup.
   */
  render() {

    const { filter, filterKey, parentKey, filterDeps } = this.props;
    const filterOptions = [];

    // if there are filter options
    if (filter.options) {

      // for each filter option, render as a list item
      filter.options.map((filter, index) => {

        let label = filter.label || filter.value;

        // get any dependent filters
        const dependentFilterType = filterDeps ? filterDeps.filterType : null;
        const dependentSpecificFilter = filterDeps ? filterDeps.specificFilter : null;

        // add localized station for MVOD label
        if (filterKey === 'video_availability') {
          label = this.getMVODLabel(label, filter.value);
        }

        // only add options that have values returned
        if (filter.count > 0) {

          filterOptions.push(
            <SearchFiltersListItem
              key={index}
              label={label}
              val={filter.value}
              filterKey={filterKey}
              count={filter.count}
              subList={!!filter.options}
              parentKey={parentKey}
              options={filter.options}
              dependentFilterType={dependentFilterType}
              dependentSpecificFilter={dependentSpecificFilter} />
          );
        }

      });

    }

    return (
      <div className='search-filters__detailed-list-container'>

        {filter.label && filterOptions.length > 0 ?
          <h3 className='search-filters__detailed-list-header'>{filter.label}</h3> :
          ''
        }

        <ul className='search-filters__detailed-list'>
          {filterOptions}
        </ul>

      </div>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchFiltersDetailedList.propTypes = {
  filterKey: PropTypes.string,
  filter: PropTypes.object,
  parentKey: PropTypes.string
};

export default SearchFiltersDetailedList;
