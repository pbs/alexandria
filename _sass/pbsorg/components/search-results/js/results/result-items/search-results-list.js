'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchResultVideoItem from './search-result-video-item';
import SearchResultWebItem from './search-result-web-item';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    results: state.results.shows
  };
};

class SearchResultsList extends Component {

  /**
   * Renders search results list markup.
   */
  render() {

    const { results } = this.props;

    const searchResults = [];

    if (results) {
      // Create a result item for each set of item data passed in, store these in array
      results.map((searchResult, i) => {
        const ItemView = (searchResult.content_type === 'video') ?
          SearchResultVideoItem :
          SearchResultWebItem ;

          searchResults.push(
            <ItemView
              itemData={searchResult}
              key={i} />
          );
      });
    }

    return (
      <ul className='search-results-list'>
        {searchResults}
      </ul>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps
)(SearchResultsList);
