'use strict';

import React, { Component, PropTypes } from 'react';
import SearchResultFeaturedEpisodesList from './search-result-featured-episodes-list';

const ImageWithFallback = require('../../../../../global/react-image-with-fallback');
// @todo: turn the above into an ES6 module

class SearchResultFeaturedContent extends Component {

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

  /**
   * Gets detailed content markup for single featured shows.
   */
  getDetailContentMarkup() {

    const { itemData } = this.props;

    return (
      <div className='search-result-featured-content__details'>
        <h2 className='search-result-featured-content__show-title'>{itemData.title}</h2>
        <h3 className='search-result-featured-content__broadcast-info'>{itemData.broadcast_info}</h3>
        <p className='search-result-featured-content__description' dangerouslySetInnerHTML={{__html:itemData.description}}></p>
        <a
          href={itemData.url}
          className='search-result-featured-content__see-all-link'>
            See All Videos
        </a>
        { itemData.episodes.length > 0 ?
          <SearchResultFeaturedEpisodesList episodes={itemData.episodes} /> :
          ''
        }
      </div>
    );
  }

  /**
   * Renders search results featured show markup.
  */
  render() {

    const { itemData, isMultiple } = this.props;
    const { hasBrokenImage } = this.state;
    const cropSuffix = isMultiple ? '.crop.189x283.jpg' : '.crop.245x380.jpg';
    const detailContent = this.getDetailContentMarkup();

    // set custom classes based on if image should be rendered
    let posterClass = 'search-result-featured-poster';
    posterClass = isMultiple ? posterClass += ' poster-multiple' : posterClass += ' poster-single';

    if (hasBrokenImage) {
      posterClass += ' fallback-image__container fallback-image__container--blue';
    }

    return (
      <li className='search-result-featured-content'>
        <div className={posterClass}>
          <a
            className='search-result-featured-poster__image-link'
            href={itemData.url}>

            <ImageWithFallback
              customClass='search-result-featured-poster__image-container'
              isBroken={hasBrokenImage}
              onBrokenImage={this.onBrokenImage}
              path={itemData.image}
              crop={cropSuffix}
              textOverlay={true}
              title={itemData.title} />

          </a>
        </div>
        { isMultiple ? '' :
          detailContent
        }
      </li>
    );
  }
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultFeaturedContent.propTypes = {
  itemData: PropTypes.object.isRequired,
  isMultiple: PropTypes.bool.isRequired
};

export default SearchResultFeaturedContent;
