'use strict';

import jQuery from 'jquery';
import React, { PropTypes, Component } from 'react';
import * as Profile from '../../scripts/modules/profile';

const ReactVideoList = require('../global/react-video-list');

require('../../scripts/jquery.pbs.cookie.js');

/**
 * Global react video list class that checks for logged in user
 * @prop {React Component} videoComponent - react component for each video item
 * @prop {React Component} noVideosComponent - react component for when no videos have been saved
 * @prop {String} listTitle - title to display
 * @prop {String} endpoint - endpoint string
 * @prop {String} profileProperty - property to remove on PROFILE
 */
class UserVideoList extends Component {

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loggedIn: this.isLoggedIn(),
      fetched: false,
      fetching: false,
      stopFetching: false,
      currentPage: 0
    };
  }

  /**
   * Renders component.
   */
  render() {

    return (
      <section className='watchlist-container'>
        <this.props.noVideosComponent
          videos={this.state.videos}
          fetched={this.state.fetched}
          loggedIn={this.state.loggedIn} />
        <ReactVideoList
          videos={this.state.videos}
          videoComponent={this.props.videoComponent}
          offset={200}
          onRemoveButtonClick={this.onRemoveButtonClick.bind(this)}
          listTitle={this.props.listTitle}
          fetchNextPage={this.fetchVideoList.bind(this)} />
      </section>
    );
  }

  /**
   * Callback invoked immediately after initial render.
   */
  componentDidMount() {

    // fetch data
    this.fetchVideoList();

  }

  /**
   * Callback invoked immediately before render.
   */
  shouldComponentUpdate(newProps, newState) {

    // if we have just set it to fetching, no need to re-render
    if (newState.fetching) {
      return false;
    }
    return true;

  }

  /**
   * Callback for when remove button is clicked.
   * @param {String} videoId - video id to remove from list
   */
  onRemoveButtonClick(videoId) {

    const updatedList = this.filterListById(videoId);
    const { profileProperty } = this.props;

    // invoke method to remove from list
    Profile
      .remove(profileProperty, {
        id: videoId
      })
      .done(function() {

        // set current state to filtered list
        this.setState({videos: updatedList});

      }.bind(this));

  }

  /**
   * Checks if user is logged in by looking for cookie.
   * @returns {Boolean} - if user is logged in
   */
  isLoggedIn() {

    return jQuery.cookie('pbs_uid') ? true : false;

  }

  /**
   * Filter out an id from video list
   * @param {String} videoId - video id to remove from list
   */
  filterListById(videoId) {

    return this.state.videos.filter((video) => {

      // remove the video that matches the id
      if (parseInt(video.id, 10) === parseInt(videoId, 10)) {
        return false;
      }

      return true;

    });

  }

  /**
   * Fetches video list for a user.
   *
   */
  fetchVideoList(index) {
    let nextPage = index || this.state.currentPage + 1;

    // only fetch if there might be more data and not currently fetching
    if (!this.state.stopFetching && !this.state.fetching && this.isLoggedIn()) {

      this.setState({fetching: true});

      jQuery.ajax({
        url: '/' + this.props.endpoint + '/page/' + nextPage + '/',
        context: document.body
      }).always(this.onFetchVideos.bind(this));

    }

  }

  /**
   * Once video data is fetched.
   */
  onFetchVideos(data) {
    let updatedState = {
      fetched: true,
      fetching: false
    };

    if (data.videos) {

      // if there were videos returned
      if (data.videos.length > 0) {
        updatedState.currentPage = data.currentPage;
        updatedState.videos = this.state.videos.concat(data.videos);
      }

      // if there are no videos returned
      // and we've already fetched once, stop fetching!
      if (data.videos.length === 0 && this.state.currentPage > 0) {
        updatedState.stopFetching = true;
      }

    }

    this.setState(updatedState);
  }

}

UserVideoList.propTypes = {
  videoComponent: PropTypes.func.isRequired,
  listTitle: PropTypes.string.isRequired,
  profileProperty: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired
};

module.exports = UserVideoList;

