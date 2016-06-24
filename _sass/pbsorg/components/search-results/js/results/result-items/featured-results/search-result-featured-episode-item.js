'use strict';

import React, { PropTypes } from 'react';

const ImageWithFallback = require('../../../../../global/react-image-with-fallback');
// @todo: turn the above into an ES6 module

/**
 * Renders SearchResultFeaturedEpisodeItem, a stateless functional component
 */
const SearchResultFeaturedEpisodeItem = ({itemData}) => (

  <li className='search-result-featured-content__episode'>
    <a
      className='search-result-featured-content__episode__image-link fallback-image__container fallback-image__container--gray'
      href={itemData.url}>

      {itemData.image ?
        <ImageWithFallback
          customClass='search-result-featured-content__episode__image-container'
          path={itemData.image}
          crop='.crop.456x256.jpg'
          textOverlay={false}
          title={itemData.title} /> :
        ''
      }
    </a>

    <div className='search-result-featured-content__episode__info'>
      <a
        className='search-result-featured-content__episode__video-title'
        href={itemData.url}>
          {itemData.title}
      </a>

      <div className='search-result-featured-content__episode__video-metrics'>

        {itemData.is_mvod ?
          <span className="passport-logo-wrapper">
            <img
              className='passport-logo'
              src={window.PBS_STATIC_URL + 'images/svg/passport_compass_rose.svg'}
              alt='Passport' />
          </span> :
          ''
        }

        <span className='search-result-featured-content__episode__video-duration'>
          {itemData.duration}
        </span>

      </div>

    </div>
  </li>

);

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultFeaturedEpisodeItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default SearchResultFeaturedEpisodeItem;
