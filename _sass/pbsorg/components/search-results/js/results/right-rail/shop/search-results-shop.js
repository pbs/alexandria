'use strict';

import React, { Component, PropTypes } from 'react';
import SearchResultsShopList from './search-results-shop-list';

class SearchResultsShop extends Component {

  /**
   * Renders shop component markup.
   */
  render() {
    const { items, logo, url } = this.props;

    return (
      <div className='search-results-shop'>
        <div className='search-results-shop__header'>
          <a
            href={url}
            className='search-results-shop__logo__link'>
            <img
              className='search-results-shop__logo'
              src={logo}
              alt='Shop PBS' />
          </a>
          <a
            href={url}
            className='search-results-shop__link'>
              See All <span className='visuallyhidden'>shop results</span>
          </a>
        </div>
        <SearchResultsShopList
          items={items} />
        <a
          href={url}
          className='search-results-shop__button btn'>
            Visit PBS Shop
        </a>
      </div>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsShop.propTypes = {
  items: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SearchResultsShop;
