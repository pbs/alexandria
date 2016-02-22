let
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  VideoListItem = require('./viewing-history-item'),
  NoVideoList = require('./viewing-history-no-list'),
  UserVideoList = require('../global/react-user-video-list'),
  ViewingHistoryList;

ViewingHistoryList = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {
    return (
      <section className="history-container l-container__inner">
        <UserVideoList
          videoComponent={VideoListItem}
          noVideosComponent={NoVideoList}
          listTitle="Viewing History"
          endpoint="viewing-history"
          profileProperty="watchedVideos" />
      </section>
    );
  }

});

module.exports = ViewingHistoryList;

jQuery(($) => {

  // render the component
  ReactDOM.render(<ViewingHistoryList />, document.getElementById('viewing-history'));

});
