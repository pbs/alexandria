'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchFiltersMore from './search-filters-more';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    request: state.request,
    filters: state.filters
  };
};

class SearchFilters extends Component {

  /**
   * Adds additional custom properties on the state.
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   */
  shouldComponentUpdate(newProps) {

    const { request } = newProps;

    // if we are starting to fetch, don't re-render
    if (request.isFetching && !this.props.request.isFetching) {
      return false;
    }

    return true;
  }

  /**
   * Renders search filters markup.
   */
  render() {

    const { filters } = this.props;
    const moreLinkText = this.state.showDetails ? 'Hide Filters' : 'Show Filters';
    const numOfFilters = this.getNumOfFilters();
    const customClass = this.state.showDetails ? '' : 'search-filters__more-section--hidden';

    return (
      <div className='search-filters'>

        <div className='search-filters__links'>
          <button
            onClick={(e) => this.onMoreLinkClick(e)}
            className='search-filters__more-link'>
            {moreLinkText} {numOfFilters}
          </button>
        </div>

        <SearchFiltersMore
          filters={filters}
          customClass={customClass} />

      </div>
    );
  }

  /**
   * Get's number of filters currently applied.
   * @returns {string} - (count) or empty string
   */
  getNumOfFilters() {

    const { filters, request } = this.props;
    let count = 0;

    for (let filter in filters) {
      if (filters.hasOwnProperty(filter) && request.customParams[filter]) {
        count += 1;
      }
    }

    return count > 0 ? '(' + count + ')' : '';

  }

  /**
   * Toggles visibility state for showing more details area.
   */
  toggleMoreVisibility() {

    this.setState({
      showDetails: !this.state.showDetails
    });

  }

  /**
   * On show more link click,
   * toggle state for if more section should be displayed.
   */
  onMoreLinkClick(e) {

    e.preventDefault();
    e.stopPropagation();

    // set new state once link is clicked to show more filters
    this.toggleMoreVisibility();

  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchFilters.propTypes = {
  request: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SearchFilters);

