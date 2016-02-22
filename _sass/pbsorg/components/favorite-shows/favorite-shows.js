/* globals window, document */
'use strict';

let jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  ShowPosterGrid = require('../global/react-show-poster-grid'),
  NoFavoritesComponent = require('./favorite-shows-no-videos'),
  InfiniteScrollReactMixin = require('../../scripts/_infinite-scroll-react-mixin'),
  FavoriteShowsGrid;

require('../../scripts/jquery.pbs.cookie.js');

FavoriteShowsGrid = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [InfiniteScrollReactMixin],

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  getInitialState() {
    return {
      content: [],
      loggedIn: this.isLoggedIn(),
      fetched: false,
      fetching: false,
      pageNumber: 0,
      totalResults: 0,
      totalPages: 0
    };
  },

  /**
   * Callback invoked immediately after initial render.
   */
  componentDidMount() {

    // fetch data
    this.fetchFavoritesList()
      .always(this.onFetchFavoriteList);

  },

  /**
   * Callback invoked immediately before render.
   */
  shouldComponentUpdate(newProps, newState) {

    // only render if new content and not before fetching
    if (!newState.fetched || newState.fetching) {
      return false;
    }
    return true;

  },

  /**
   * Fetches favorite videos list for a user.
   */
  fetchFavoritesList(index) {

    let nextPage = index || this.state.pageNumber + 1;

    this.setState({fetching: true});

    return jQuery.ajax({
      url: '/favorite-shows-page/' + nextPage + '/',
      type: 'get'
    });

  },

  /**
   * Callback when favorites list data has been fetched.
   */
  onFetchFavoriteList(data) {

    let updatedState = {
        fetched: true,
        fetching: false
      };

    if (data.content) {
      updatedState.content = this.state.content.concat(data.content);
    }

    if (this.isMounted()) {
      this.setState(updatedState);
    }

  },

  /**
   * Checks if user is logged in by looking for cookie.
   * @returns {Boolean} - if user is logged in
   */
  isLoggedIn() {
    
    return jQuery.cookie('pbs_uid') ? true : false;

  },

  /**
   * Gets proper view to display based on if there are favorite shows.
   * @returns {React Component} - no favorites or grid
   */
  getView() {

    if (this.state.content.length > 0) {
      return <ShowPosterGrid shows={this.state.content} />;
    } else {
      return <NoFavoritesComponent
        fetched={this.state.fetched}
        loggedIn={this.state.loggedIn}
        videos={this.state.content} />;
    }

  },

  /**
   * Renders Component.
   */
  render() {

    let content = this.getView();
    return (
      <section className="favorite-shows-grid">
        {content}
      </section>
    );

  },

  /**
   * Fetches next page data on infinite scroll.
   * @param {index} Number - filter key desired (optional)
   */
  fetchNextPage(index) {

    let nextPage = index || this.state.pageNumber + 1;

    // if there are more pages, fetch
    if (this.hasMorePages() && !this.state.fetching) {

      // fetch next page show data
      this.fetchFavoritesList(nextPage)
        .always(this.onFetchFavoriteList);
    }

  },

  /**
   * Checks to see if there are more pages to be fetched.
   * @returns {Boolean} - true if has more pages to fetch
   */
  hasMorePages() {
    return (this.state.pageNumber < this.state.totalPages) ? true : false;
  }

});


jQuery(($) => {

  // render the component
  ReactDOM.render(<FavoriteShowsGrid offset={100} />, document.getElementById('favorite-shows__container'));

});