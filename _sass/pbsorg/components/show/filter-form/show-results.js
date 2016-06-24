'use strict';

import jQuery from 'jquery';
import React from 'react';

const Grid = require('../../global/react-show-poster-grid');
const GridItem = require('./show-results-grid-item');
const List = require('./show-results-list');

const Results = React.createClass({

  /**
   * Renders component.
   */
  render() {
    let filteredShows = this.getShowsToDisplay(),
      content;

    // sort all shows
    this.sortShows(filteredShows);

    // if we aren't currently fetching or filtering
    if (!this.props.fetchingData && !this.props.filtering) {

      // show no results copy if no results match filters
      if (filteredShows.length === 0 && this.props.hasFetched) {
        content = <h2 className="shows-landing__no-results-header">There are no results for these filters.</h2>;
      } else {

        // show grid or list
        content = (this.props.layout === 'grid') ? <Grid shows={filteredShows} gridItem={GridItem} /> : <List shows={filteredShows} />;
      }
    }

    return (
      <div className="results show-poster-grid__container">
        {content}
      </div>
    );
  },

  /**
   * Callback invoked before render when component receives new props or state.
   * @param {Object} newProps - new component props object
   */
  shouldComponentUpdate(newProps) {

    let filteredShows = this.getShowsToDisplay(newProps.shows);

    // check to see if filtered shows meets the required minimum
    // and that there are more pages to fetch
    if (filteredShows.length < 20 && newProps.hasMorePages) {

      // fetch more data and don't render
      newProps.fetchNextPage();
      return false;
    }

    return true;

  },

  /**
   * Gets array of filtered shows to display in results view.
   * @returns {Array} - array of show objects
   */
  getShowsToDisplay(showsObject) {

    let component = this,
      shows = showsObject || component.props.shows,
      filteredShows = [];

    shows.map(function (show, index) {
      if (component.passesFiltering(show)) {
        filteredShows.push(show);
      }
    });

    return filteredShows;

  },

  /**
   * Checks if show should be rendered or not based on current filters.
   * @param {Object} show - show data
   * @returns {Boolean} - returns true if the show passes all filters
   */
  passesFiltering(show) {
    let invalidCount = 0,
      filter,
      isValid;

    // loop through filters and get number of invalid filters
    for (let key in this.props.filters) {
      if (this.props.filters.hasOwnProperty(key)) {
        filter = this.props.filters[key].filterMethod;

        // only check if the filter has a value
        if (filter) {
          isValid = this[filter](key, show, this.props.filters[key].defaultVal);

          if (!isValid) {
            invalidCount ++;
          }
        }
      }
    }

    // if there invalid filters, return false
    if (invalidCount > 0) {
      return false;
    }
    return true;

  },

  /**
   * Filters show by genre.
   * @param {String} key - 'genre' or filter key
   * @param {Object} show - show data
   * @param {String} defaultVal - default value for genre filter
   * @returns {Boolean} - returns true if the show passes all filters
   */
  filterByGenre(key, show, defaultVal) {

    // if it is default value of all, return true immediately
    if (this.props[key] === defaultVal) {
      return true;
    }

    // if there is no value at all
    if (!show[key]) {
      return false;
    }

    // check if the selected genre is in the show's genre list
    return show[key].indexOf(this.props[key]) > -1;

  },

  /**
   * Filters show by title.
   * @param {String} key - 'title' or filter key
   * @param {Object} show - show data
   * @returns {Boolean} - returns true if the show passes all filters
   */
  filterByTitle(key, show) {

    // if no title has been entered
    if (!this.props[key]) {
      return true;
    }

    // check if user entered title exists in show's title or is Masterpiece
    return (show[key].toLowerCase().indexOf(this.props[key].trim().toLowerCase()) > -1 )
        || (show[key].toLowerCase() === 'masterpiece');

  },

  /**
   * Filters show by station setting.
   * @param {String} key - 'station' or filter key
   * @param {Object} show - show data
   * @returns {Boolean} - returns true if the show passes all filters
   */
  filterByStation(key, show) {

    // if stations checkbox is not checked, return
    if (!this.props[key]) {
      return true;
    }

    // get station cookie and compare to show's value
    return this.props.localCallsign && (this.props.localCallsign === show['producer']);
  },

  /**
   * Sorts shows content by ascending or popularity.
   * @param {Array} shows - array of filtered shows to display
   */
  sortShows(shows) {
    if (this.props.sortBy === 'ascending') {
      this.alphabetizeShows(shows);
    } else {
      this.popularizeShows(shows);
    }
  },

  /**
   * Sorts content alphabetically.
   * @param {Array} shows - array of filtered shows to display
   */
  alphabetizeShows(shows) {

    let titleA, titleB;

    shows.sort((a, b) => {
      titleA = a.title.toLowerCase();
      titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });

  },

  /**
   * Sorts content by popularity value.
   * @param {Array} shows - array of filtered shows to display
   */
  popularizeShows(shows) {

    let popA, popB;

    shows.sort((a, b) => {
      popA = parseInt(a.popularity, 10);
      popB = parseInt(b.popularity, 10);

      if (popA < popB) {
        return -1;
      }
      if (popA > popB) {
        return 1;
      }
      return 0;
    });

  }

});

module.exports = Results;
