'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchResultsHeader from './header/search-results-header';
import SearchResultsFeaturedContainer from './result-items/featured-results/search-results-featured-container';
import SearchResultsList from './result-items/search-results-list';
import SearchResultsPagination from './pagination/search-results-pagination';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    featured: state.results.featured,
    page: state.request.customParams.page
  };
};

/**
 * Renders SearchResultsMain, a stateless functional component
 */
const SearchResultsMain = (props) => {

  const { featured, page } = props;

  return (
    <section className='search-results__main'>
      <SearchResultsHeader />
      { featured.length > 0 && page === 1 ?
        <SearchResultsFeaturedContainer
          featured={featured} /> :
        ''
      }
      <SearchResultsList />
      <SearchResultsPagination />
    </section>
  );

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsMain.propTypes = {
  featured: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps
)(SearchResultsMain);

