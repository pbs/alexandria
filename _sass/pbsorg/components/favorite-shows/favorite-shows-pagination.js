'use strict';

import React, { Component, PropTypes } from 'react';

class FavShowsPagination extends Component {

  /**
   * Creates class and binds _onButtonClick to correct "this."
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  /**
   * Handles a click to the 'Prev' or 'Next' buttons.
   */
  _onButtonClick(e) {

    const { fetchPage, currentPage } = this.props;
    let pageNum;

    // check data-direction attribute of the clicked link
    // will be 'next' or 'prev'
    if (e.target.getAttribute('data-direction') === 'next') {
      pageNum = currentPage + 1;
    } else {
      pageNum = currentPage - 1;
    }

    fetchPage(pageNum);
  }

  /**
   * Renders favorite shows pagination.
   */
  render() {

    const { currentPage, totalPages } = this.props;

    return (
      <section className='favorite-shows__pagination'>

        { currentPage > 1 ?

          <button
            className='favorite-shows__previous'
            aria-label='Previous page of favorite shows'
            data-direction='prev'
            onClick={this._onButtonClick}
            >
              Prev
          </button> :
          ''
        }

        { currentPage < totalPages ?
          <button
            className='favorite-shows__next'
            aria-label='Next page of favorite shows'
            data-direction='next'
            onClick={this._onButtonClick}>
              Next
          </button> :
          ''
        }
      </section>

    );
  }

};


/**
 * Define required properties
 * and expected corresponding types
 */
FavShowsPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchPage: PropTypes.func.isRequired
};

export default FavShowsPagination;


