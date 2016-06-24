'use strict';

import React, { Component, PropTypes } from 'react';
import SearchPaginationListItem from './search-results-pagination-list-item';

class SearchPaginationList extends Component {

  /**
   * Renders Search Pagination list component.
   */
  render() {

    const pages = [];

    // get adjusted page numbers (if we need to center)
    const pageNums = this.getMaxAndMinPageNums();

    // for total numbers to show in list,
    // create a list item
    for (let i = pageNums.min; i <= pageNums.max; i += 1) {
      pages.push(
        <SearchPaginationListItem
          key={i}
          value={i}
          optionKey='page' />
      );
    }

    return (
      <ul className='search-results__pagination-list'>
        {pages}
      </ul>
    );

  }

  /**
   * Gets max and min page numbers to display.
   * needed in case we need to center the numbers.
   */
  getMaxAndMinPageNums() {

    const { currentPage, maxPages, itemsPerPage, layout, totalPages } = this.props;

    // get current max pages to show based on screen width
    const { layoutTotal, numOfBorderPages } = maxPages[layout];

    // default as if all results will fit
    let min = currentPage;
    let max = totalPages;

    // if there are more pages of results than can be shown at this layout size
    if (totalPages > layoutTotal) {

      const halfwayNum = Math.round(layoutTotal / 2);

      // if the current page should be at the end
      if (currentPage > (totalPages - halfwayNum)) {

        max = totalPages;
        min = totalPages - layoutTotal + 1;

      } else if (currentPage > halfwayNum) {

        // if current page index is higher
        // than half of the max numbers to show
        // center the number
        // center the index by updating the min page and max page values
        min = currentPage - numOfBorderPages;
        max = currentPage + numOfBorderPages;

      } else {

        // if it doesn't need to be centered,
        // show 1 as the min page value and max page as the max page value
        min = 1;
        max = layoutTotal;
      }
    } else {

        // if there are less pages than the max allowed
        // show 1 as the min page value and keep max as max pages
        min = 1;
    }

    return {
      min,
      max
    };

  }
}

SearchPaginationList.defaultProps = {
  maxPages: {
    small: {
      layoutTotal: 3,
      numOfBorderPages: 1
    },
    medium: {
      layoutTotal: 5,
      numOfBorderPages: 2
    },
    large: {
      layoutTotal: 9,
      numOfBorderPages: 4
    }
  },
  itemsPerPage: 10
}

/**
 * Define required properties
 * and expected corresponding types
 */
SearchPaginationList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  layout: PropTypes.string.isRequired,
  maxPages: PropTypes.object.isRequired,
  totalPages: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

export default SearchPaginationList;
