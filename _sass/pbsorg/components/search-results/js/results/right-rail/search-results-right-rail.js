'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchResultsRailAd from './search-results-rail-ad';
import SearchResultsShop from './shop/search-results-shop';
import _isEqual from 'lodash.isequal';

/**
 * Maps state properties to component properties
 * @param {object} state - current state
 * @returns {object} - properties to subscribe to the store
 */
const mapStateToProps = (state) => {
  return {
    items: state.shop.items,
    logo: state.shop.logo,
    url: state.shop.shop_url
  };
};

class SearchResultsRightRail extends Component {
  /**
   * Invoked before rendering when new props and state is received.
   * @param {object} newProps - new props data
   * @param {object} newState- new state data
   */
  shouldComponentUpdate(newProps, newState) {

    // don't re-render if nothing has changed
    if (_isEqual(this.props, newProps)) {
      return false;
    }

    return true;
  }

  render() {

    const { items, logo, url } = this.props;

    return (
      <section className='search-results__rail--right'>
        <SearchResultsRailAd />
        { items.length > 0 ?
          <SearchResultsShop
            items={items}
            logo={logo}
            url={url} /> :
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
SearchResultsRightRail.propTypes = {
  items: PropTypes.array,
  logo: PropTypes.string,
  url: PropTypes.string
};

export default connect(
  mapStateToProps
)(SearchResultsRightRail);
