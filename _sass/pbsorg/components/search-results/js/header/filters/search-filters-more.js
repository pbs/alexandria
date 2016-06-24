'use strict';

import React, { Component, PropTypes } from 'react';
import SearchFiltersDetailedList from './search-filters-list-detailed';

class SearchFiltersMore extends Component {

  /**
   * Renders search filters more/detailed section.
   */
  render() {

    const { filters, customClass, videoFilterDeps, accessFilterDeps } = this.props;

    return (
      <div className={'search-filters__more-section ' + customClass}>

        {filters['content_type'].options.length > 0 ?
          <SearchFiltersDetailedList
            filter={filters['content_type']}
            filterKey='content_type'
            filterDeps={videoFilterDeps} /> :
          ''
        }

        {filters.show.options.length > 0 ?
          <SearchFiltersDetailedList
            filter={filters.show}
            filterKey='show' /> :
          ''
        }

        {filters['video_length'].options.length > 0 ?
          <SearchFiltersDetailedList
            filter={filters['video_length']}
            filterKey='video_length' /> :
          ''
        }

        {filters['video_availability'].options.length > 0 ?
          <SearchFiltersDetailedList
            filter={filters['video_availability']}
            filterKey='video_availability'
            filterDeps={accessFilterDeps} /> :
          ''
        }

      </div>

    );
  }

};

/**
 * Define default props specific to this component
 */
SearchFiltersMore.defaultProps = {
  accessFilterDeps: {
    filterType: 'content_type',
    specificFilter: 'video'
  },
  videoFilterDeps: {
    filterType: 'video_availability'
  }
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchFiltersMore.propTypes = {
  filters: PropTypes.object.isRequired
};

export default SearchFiltersMore;


