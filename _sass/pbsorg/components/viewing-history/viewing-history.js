'use strict';

import jQuery from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const VideoListItem = require('./viewing-history-item');
const NoVideoList = require('./viewing-history-no-list');
const UserVideoList = require('../global/react-user-video-list');

class ViewingHistoryList extends Component {

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin]

  /**
   * Renders component.
   */
  render() {
    return (
      <section className='history-container l-container__inner'>
        <UserVideoList
          videoComponent={VideoListItem}
          noVideosComponent={NoVideoList}
          listTitle='Viewing History'
          endpoint='viewing-history'
          profileProperty='watchedVideo' />
      </section>
    );
  }

}

module.exports = ViewingHistoryList;

jQuery(() => {

  // render the component
  ReactDOM.render(<ViewingHistoryList />, document.getElementById('viewing-history'));

});
