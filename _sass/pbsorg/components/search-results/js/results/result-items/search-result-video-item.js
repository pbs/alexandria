'use strict';

import React, { Component, PropTypes } from 'react';

const ImageWithFallback = require('../../../../global/react-image-with-fallback');
// @todo: turn the above into an ES6 module

/**
 * Renders SearchResultVideoItem, a stateless functional component
 */
class SearchResultVideoItem extends Component {

  /**
   * Custom constructor to add state for broken image.
   */
  constructor(props) {
    super(props);
    this.state = {
      hasBrokenImage: false
    };
    this.onBrokenImage = this.onBrokenImage.bind(this);
  }

  /**
   * Update broken image with css fallback.
   * @param {Boolean} - boolean if image is broken
   */
  onBrokenImage(hasBrokenImage) {

    this.setState({
      hasBrokenImage
    });

  }

  render() {
    const { itemData } = this.props;
    const { hasBrokenImage } = this.state;

    let imageLinkClasses = 'search-result-video-item__image-link';

    if (hasBrokenImage) {
      imageLinkClasses += ' fallback-image__container fallback-image__container--gray';
    }

    return(

      <li className='search-result-video-item'>
        <a
          className={imageLinkClasses}
          href={itemData.url}>

            <ImageWithFallback
              customClass='search-result-video-item__image-container'
              isBroken={hasBrokenImage}
              onBrokenImage={this.onBrokenImage}
              path={itemData.image}
              crop='.crop.379x212.jpg'
              textOverlay={false}
              title={itemData.title} />

        </a>

        <div className='search-result-video-item__info'>
          <a
            href={itemData.show_url}
            className='search-result-video-item__show-title'>
              {itemData.show_title}
          </a>

          <a
            className='search-result-video-item__video-title'
            href={itemData.url}>
              {itemData.title}
          </a>

          <p className='search-result-video-item__video-description'>
            {itemData.short_description}
          </p>

          <div className='search-result-video-item__video-metrics'>

            {itemData.is_mvod ?
              <span className="passport-logo-wrapper">
                <img
                  className='passport-logo'
                  src={window.PBS_STATIC_URL + 'images/svg/passport_compass_rose.svg'}
                  alt='Passport' />
              </span> :
              ''
            }

            <span className='search-result-video-item__video-duration'>
              {itemData.duration} |
            </span>

            <span className='search-result-video-item__video-type'>
              {itemData.video_type}
            </span>

          </div>

        </div>
      </li>

    );
  }

};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultVideoItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default SearchResultVideoItem;
