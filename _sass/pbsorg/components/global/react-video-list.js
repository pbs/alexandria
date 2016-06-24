let
  jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  InfiniteScrollReactMixin = require('../../scripts/_infinite-scroll-react-mixin'),
  // PureRenderMixin = React.addons.PureRenderMixin,
  VideoList;

/**
 * Global react video list class with infinite scrolling
 * @prop {Array} videos - an array of videos to display
 * @prop {React Component} videoComponent - react component for each video item
 * @prop {Function} fetchNextPage - function to fetch more data
 */
VideoList = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [InfiniteScrollReactMixin],

  /**
   * Renders component.
   */
  render() {

    let content = this.props.videos.map((video) => {
        return <this.props.videoComponent key={video.id} video={video} onRemoveButtonClick={this.props.onRemoveButtonClick} />;
      }),
      overMessage = this.getOverMessage();

    return (
      <section className="video-list-container">
        {overMessage}
        {content}
      </section>
    );
  },

  /**
   * Check if there should be a warning message for over 100 videos.
   * @returns {React element|undefined}
   */
  getOverMessage() {

    if (this.props.listTitle && this.props.videos.length === 100) {
      return <p className="limit-message">We are only able to display the top 100 videos in your {this.props.listTitle}. Additional videos will appear as you remove items from the list.</p>;
    }

  },

  /**
   * Fetches the next page data implementd by infinite scroll.
   */
  fetchNextPage() {

    // if fetch function has been passed in,
    // fetch data
    if (this.props.fetchNextPage) {
      this.props.fetchNextPage();
    }
  }

});

module.exports = VideoList;

