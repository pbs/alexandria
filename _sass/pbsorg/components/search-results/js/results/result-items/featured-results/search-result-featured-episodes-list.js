'use strict';

import React, { Component, PropTypes } from 'react';
import SearchResultFeaturedEpisodeItem from './search-result-featured-episode-item';

class SearchResultFeaturedEpisodesList extends Component {


  render() {

    const latestEpisodes = [];

    const { episodes } = this.props;

    episodes.forEach((episode, i) => {
      latestEpisodes.push(
        <SearchResultFeaturedEpisodeItem
          itemData={episode}
          key={i} />
      );
    });

    return (
      <div className='search-result-featured-content__episodes'>
        <p className='search-result-featured-content__episodes-header'>
          <span className='search-result-featured-content__episodes-header--longer'>Watch</span> Latest Episodes
        </p>
        <ul className='search-result-featured-content__episodes-list'>
          {latestEpisodes}
        </ul>
      </div>
    );
  };
};

/**
 * Define required properties
 * and expected corresponding types
 */
SearchResultFeaturedEpisodesList.propTypes = {
  episodes: PropTypes.array.isRequired
};

export default SearchResultFeaturedEpisodesList;
