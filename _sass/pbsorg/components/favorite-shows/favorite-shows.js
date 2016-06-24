'use strict';

import jQuery from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './favorite-shows-pagination';

const ShowPosterGrid = require('../global/react-show-poster-grid');
const NoFavoritesComponent = require('./favorite-shows-no-videos');

require('../../scripts/jquery.pbs.cookie.js');

class FavoriteShowsGrid extends Component {

   /**
   * Creates class
   * @param {object} props - default props
   */
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      loggedIn: this.isLoggedIn(),
      fetched: false,
      fetching: false,
      pageNumber: 0,
      totalResults: 0,
      totalPages: 0
    };
    this.fetchPage = this.fetchPage.bind(this);
  }

  /**
   * Callback invoked immediately after initial render.
   */
  componentDidMount() {

    // fetch data
    this.fetchFavoritesList()
      .always(this.onFetchFavoriteList.bind(this));

  }

  /**
   * Callback invoked immediately before render.
   */
  shouldComponentUpdate(newProps, newState) {

    // Component should update while fetching to mimic a "refresh"
    if (!newState.fetched) {
      return false;
    }
    return true;

  }

  /**
   * Fetches favorite videos list for a user.
   */
  fetchFavoritesList(index) {

    let nextPage = index || this.state.pageNumber + 1;

    this.setState({fetching: true, content: []});

    return jQuery.ajax({
      url: '/favorite-shows-page/' + nextPage + '/',
      type: 'get'
    });

  }

  /**
   * Callback when favorites list data has been fetched.
   */
  onFetchFavoriteList(data) {

    const updatedState = Object.assign({}, data, {
      content: data.content ? data.content : this.state.content,
      fetched: true,
      fetching: false
    });

    this.setState(updatedState, function() {
      // reload favorites at top of page
      window.scrollTo(0,0);
    });

  }

  /**
   * Checks if user is logged in by looking for cookie.
   * @returns {Boolean} - if user is logged in
   */
  isLoggedIn() {

    return jQuery.cookie('pbs_uid') ? true : false;

  }

  /**
   * Gets proper view to display based on if there are favorite shows.
   * @returns {React Component} - no favorites or grid
   */
  getView() {

    const { totalPages, pageNumber, fetching } = this.state;

    if (this.state.content.length > 0) {
      return (
        <div id='favorite-shows__grid' className='favorite-shows__grid'>
          <ShowPosterGrid shows={this.state.content} />
          <Pagination
            totalPages={totalPages}
            currentPage={pageNumber}
            fetchPage={this.fetchPage} />
        </div>
      );
    } else if (!fetching) {
      return <NoFavoritesComponent
        fetched={this.state.fetched}
        loggedIn={this.state.loggedIn}
        videos={this.state.content} />;
    }

  }

  /**
   * Renders Component.
   */
  render() {

    let content = this.getView();

    return (
      <section className='favorite-shows'>
        {content}
      </section>
    );

  }

  /**
   * Fetches next page data.
   * @param {index} Number - page number
   */
  fetchPage(index) {

    let nextPage = index || this.state.pageNumber + 1;

    // if there are next/prev pages, fetch
    if (!this.state.fetching && (this.hasNextPages() || this.hasPrevPages())) {

      // fetch next/prev page show data
      this.fetchFavoritesList(nextPage)
        .always(this.onFetchFavoriteList.bind(this));
    }

  }

  /**
   * Checks to see if there are next pages to be fetched.
   * @returns {Boolean} - true if has next pages to fetch
   */
  hasNextPages() {
    return (this.state.pageNumber < this.state.totalPages) ? true : false;
  }

  /**
   * Checks to see if there are previous pages to be fetched.
   * @returns {Boolean} - true if has previous pages to fetch
   */
  hasPrevPages() {
    return (this.state.pageNumber > 1) ? true : false;
  }

};


jQuery(($) => {

  // render the component
  ReactDOM.render(<FavoriteShowsGrid />, document.getElementById('favorite-shows__container'));

});

