'use strict';

import React, { Component, PropTypes } from 'react';
import SearchResultFeaturedContent from './search-result-featured-content';
import _isEqual from 'lodash.isequal';

class SearchResultsFeaturedContainer extends Component {

  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   */
  shouldComponentUpdate(newProps) {

    const { featured } = this.props;

    if (_isEqual(featured, newProps.featured)) {
      return false;
    }

    return true;
  }

  /**
   * Renders search results featured container markup.
   */
  render() {

    const { featured } = this.props;

    const featuredShows = [];

    featured.map((featuredShow, i) => {
        featuredShows.push(
          <SearchResultFeaturedContent
            itemData={featuredShow}
            key={i}
            isMultiple={featured.length > 1} />
        );
    });

    return (
      <ul className='search-results-featured-container'>
        {featuredShows}
      </ul>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsFeaturedContainer.propTypes = {
  featured: PropTypes.array.isRequired
};

export default SearchResultsFeaturedContainer;
