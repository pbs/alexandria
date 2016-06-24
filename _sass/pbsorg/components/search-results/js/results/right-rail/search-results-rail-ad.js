'use strict';

import React, { PropTypes, Component } from 'react';
import LazyloadAd from '../../../../ad/ad-lazyload';

/**
 * Renders SearchResultsRailAd
 */
class SearchResultsRailAd extends Component {

  componentDidMount() {

    const ad = new LazyloadAd(this.props);
    ad.render();

  }

  render() {
    return (
      <div className='ad ad--medium-rectangle-half-page'>
        <div id='medium-rectangle-half-page' className='ad__wrapper'></div>
        <div className='ad__explanation'>
          <p className='ad__explanation__text'>Providing Support for PBS.org</p>
          <p className='ad__explanation__link'>
            <a
              href='http://help.pbs.org/support/solutions/articles/5000677869'
              target='_blank'>
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }

}

SearchResultsRailAd.defaultProps = {
  div_id: 'medium-rectangle-half-page',
  sizes: [
    [300, 250]
  ],
  unit: 'searchresults_main',
  lazyload: true
};

SearchResultsRailAd.propTypes = {
  div_id: PropTypes.string.isRequired,
  sizes: PropTypes.array,
  unit: PropTypes.string.isRequired,
  lazyload: PropTypes.bool.isRequired
};

export default SearchResultsRailAd;
