'use strict';

import React, { Component, PropTypes } from 'react';
import SearchResultsShopListItem from './search-results-shop-list-item';

class SearchResultsShopList extends Component {

  /**
   * Renders shop list markup.
   */
  render() {

    const { items } = this.props;

    const shopItems = [];

    if (items) {
      // Create a SearchResultsShopListItem for each set of item data passed in, store these in array
      items.map((shopItem, i) => {
        shopItems.push(
          <SearchResultsShopListItem
            key={i}
            itemData={shopItem} />
        );
      });
    }

    return (
      <ul className='search-results-shop__list'>
        {shopItems}
      </ul>
    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultsShopList.propTypes = {
  items: PropTypes.array.isRequired
};

export default SearchResultsShopList;
