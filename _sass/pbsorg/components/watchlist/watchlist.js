'use strict';

import jQuery from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const VideoListItem = require('./watchlist-item');
const NoVideoList = require('./watchlist-no-list');
const UserVideoList = require('../global/react-user-video-list');

class Watchlist extends Component {

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin]

  /**
   * Renders component.
   */
  render() {
    return (
      <section className='watchlist-container'>
        <UserVideoList
          videoComponent={VideoListItem}
          noVideosComponent={NoVideoList}
          listTitle='Watchlist'
          endpoint='watchlist'
          profileProperty='favoriteVideo' />
      </section>
    );
  }

}

module.exports = Watchlist;

jQuery(() => {

  // render the component
  ReactDOM.render(<Watchlist />, document.getElementById('watchlist'));

});
