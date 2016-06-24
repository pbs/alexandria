'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchPaginationList from './search-results-pagination-list';
import SearchPaginationDirection from './search-results-pagination-direction';
import { debounce } from '../../../../../scripts/modules/utils-basic';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    params: state.request.customParams,
    totalPages: state.results.totalPages
  };
};

class SearchPagination extends Component {

  /**
   * Adds additional custom properties on the state.
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);

    // set state for layout differences
    this.state = {
      layout: this.getLayoutSize()
    };

    // bind reference of this
    this.onResize = this.onResize.bind(this);
  }

  /**
   * Get layout size based on window width
   * @returns {string} - current layout size
   */
  getLayoutSize() {

    const width = window.innerWidth;
    if (width < 768) {
      return 'small';
    } else if (width < 1025) {
      return 'medium';
    }

    return 'large';

  }

  /**
   * Immediately before render when new props/state is received.
   * @param {object} newProps - new props
   * @param {object} newState - new state
   */
  shouldComponentUpdate(newProps, newState) {
    const { params, totalPages } = newProps;
    const { layout } = newState;

    // always re-render if param has changed
    if (JSON.stringify(params) !== JSON.stringify(this.props.params)) {
      return true;
    }

    // if total pages has changed, render
    if (totalPages !== this.props.totalPages) {
      return true;
    }

    // // prevent re-render if layout hasn't changed
    if (layout === this.state.layout) {
      return false;
    }

    return true;
  }

  /**
   * Immediately after the initial render, add resize event listener.
   */
  componentDidMount() {
    window.addEventListener('resize', debounce(this.onResize, this.props.debounceDuration));
  }

  /**
   * Before component is unmounted from DOM, remove resize event listener.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.onResize, this.props.debounceDuration));
  }

  /**
   * Immediately after updates have been flushed to DOM.
   * @param {object} prevProps - previous props
   */
  componentDidUpdate(prevProps) {
    const { params } = prevProps;

    // if the page has changed, scroll to top.
    if (params.page !== this.props.params.page) {
      window.scrollTo(0, 0);
    }
  }

  /**
   * On window resize
   */
  onResize() {

    // update window size
    this.setState({
      layout: this.getLayoutSize()
    });
  }

  /**
   * Renders entire pagination component.
   */
  render() {

    const { params, totalPages } = this.props;
    const { layout } = this.state;

    return (
      <section className='search-results__pagination'>

      { params.page > 1 ?
        <SearchPaginationDirection
          value={params.page - 1}
          optionKey='page'
          direction='prev'
          label={layout === 'small' ? 'Prev' : 'Previous'} /> :
        ''
      }

      <SearchPaginationList
        currentPage={params.page}
        layout={layout}
        totalPages={totalPages} />


      { params.page < totalPages ?
        <SearchPaginationDirection
          value={params.page + 1}
          optionKey='page'
          direction='next'
          label='Next' /> :
        ''
      }

      </section>
    );

  }
}

SearchPagination.defaultProps = {
  debounceDuration: 200
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchPagination.propTypes = {
  totalPages: PropTypes.number,
  params: PropTypes.object,
  debounceDuration: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(SearchPagination);
