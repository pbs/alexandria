let
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  PureRenderMixin = React.addons.PureRenderMixin,
  VideoListItem = require('./watchlist-item'),
  NoVideoList = require('./watchlist-no-list'),
  UserVideoList = require('../global/react-user-video-list'),
  Watchlist;

Watchlist = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {
    return (
      <section className="watchlist-container">
        <UserVideoList
          videoComponent={VideoListItem}
          noVideosComponent={NoVideoList}
          listTitle="Watchlist"
          endpoint="watchlist"
          profileProperty="favoriteVideos" />
      </section>
    );
  }

});

module.exports = Watchlist;

jQuery(($) => {

  // render the component
  ReactDOM.render(<Watchlist />, document.getElementById('watchlist'));

});
