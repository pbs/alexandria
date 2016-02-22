'use strict';

let jQuery = window.jQuery || require('jquery'),
  React = window.React || require('react'),
  ReactDOM = window.ReactDOM || require('react-dom'),
  FilterBar = require('./show-filter-bar'),
  Results = require('./show-results'),
  InfiniteScrollReactMixin = require('../../../scripts/_infinite-scroll-react-mixin'),
  ShowsFilterForm;

require('../../../scripts/jquery.history');
require('../../../scripts/jquery.pbs.cookie.js');

ShowsFilterForm = React.createClass({

  /**
   * Array of any mixin libraries for react.
   */
  mixins: [InfiniteScrollReactMixin],

  /**
   * @property filterDelay
   * Property to prevent fetching on every input keypress for filters.
   */
  filterDelay: undefined,

  /**
   * @property data
   * Array to hold newest data to send for fetching show data.
   */
  data: [],

  /**
   * @property filters
   * Object of all filters available as URL search params.
   */
  filters: {
    genre: {
      defaultVal: 'All',
      filterMethod: 'filterByGenre'
    },
    title: {
      defaultVal: '',
      filterMethod: 'filterByTitle'
    },
    station: {
      defaultVal: false,
      filterMethod: 'filterByStation'
    },
    alphabetically: {
      defaultVal: false,
    },
    layout: {
      defaultVal: 'grid'
    }
  },

  /**
   * Returns the initial state before the component is mounted.
   * @returns {Object} - initial state object
   */
  getInitialState() {
    let searchParams = this.getSearchParamsFromUrl();
    return {
      content: [],
      pageNumber: 0,
      totalPages: 0,
      totalResults: 0,
      layout: searchParams.layout,
      sortBy: searchParams.alphabetically ? 'ascending' : 'popular',
      title: searchParams.title,
      station: searchParams.station,
      genre: searchParams.genre,
      alphabetically: searchParams.alphabetically,
      genreList: [],
      localStation: '',
      localCallsign: jQuery.cookie('pbsol.station'),
      fetched: false,
      fetching: false
    };
  },

  /**
   * Callback invoked before render when component receives new props or state.
   * @param {Object} newProps - new component props object
   * @param {Object} newState - new component state object
   */
  shouldComponentUpdate(newProps, newState) {

    let titleChanged = this.hasFilterChanged(this.state, newState, 'title'),
      genreChanged = this.hasFilterChanged(this.state, newState, 'genre'),
      stationChanged = this.hasFilterChanged(this.state, newState, 'station'),
      sortByChanged = this.hasFilterChanged(this.state, newState, 'sortBy');

    // check if filters have changed before rendering new component
    // because if they have, need to make a new call with updated params
    if (titleChanged) {

      // add the newest state data to our data array to store
      this.data.push(newState);

      // if there isn't a current timeout existing
      if (!this.filterDelay) {

        // set new timeout for the fetch
        this.filterDelay = setTimeout((component = this) => {

          // fetch shows data with last state
          component.fetchShowsData(0, component.data[component.data.length - 1], true);

          // clear current time out so we can fetch again
          clearTimeout(this.filterDelay);
          this.data = [];

        }, 500);
      }
    }

    // if genre or station has been changed
    if (genreChanged || stationChanged || sortByChanged) {
      this.filterDelay = true;
      this.fetchShowsData(0, newState, true);
    }

    // if we have just set it to fetching, no need to re-render
    if (newState.fetching) {
      return false;
    }

    return true;
  },

  /**
   * Callback invoked immediately after initial render.
   */
  componentDidMount() {

    let component = this;
    // make call for data
    // @note: load in componentDidMount per
    // https://facebook.github.io/react/tips/initial-ajax.html
    component.fetchShowsData(0, this.state);

    // when state changes, make sure set filters
    History.Adapter.bind(window, 'statechange', () => {
      component.setSearchParamsInUrl();
    });

  },

  /**
   * Renders component.
   */
  render() {
    return (
      <section className="show-filter-form">
        <FilterBar
          title={this.state.title}
          onTitleChange={this.onTitleInputChange}
          onTitleKeypressed={this.onTitleKeypressed}
          genreSelectVal={this.state.genre}
          onGenreSelectChange={this.onGenreSelectChange}
          genreList={this.state.genreList}
          stationBool={this.state.station}
          onStationCheckboxChange={this.onStationCheckboxChange}
          sortBy={this.state.sortBy}
          onSortByClick={this.onSortByClick}
          layout={this.state.layout}
          onLayoutClick={this.onLayoutClick}
          localStation={this.state.localStation} />
        <Results
          layout={this.state.layout}
          sortBy={this.state.sortBy}
          genre={this.state.genre}
          title={this.state.title}
          filters={this.filters}
          shows={this.state.content}
          station={this.state.station}
          filtering={this.filterDelay}
          fetchNextPage={this.fetchNextPage}
          fetchingData={this.state.fetching}
          hasFetched={this.state.fetched}
          hasMorePages={this.hasMorePages()}
          localStation={this.state.localStation}
          localCallsign={this.state.localCallsign}
        />
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
    if (this.hasMorePages()) {

      // fetch next page show data
      this.fetchShowsData(nextPage, this.state);
    }

  },

  /**
   * Checks to see if there are more pages to be fetched.
   * @returns {Boolean} - true if has more pages to fetch
   */
  hasMorePages() {
    return (this.state.pageNumber < this.state.totalPages - 1) ? true : false;
  },

  /**
   * Fetches show data.
   * @param {Number} pageIndex - page number to include in the fetch
   * @param {Object} data - page data to fetch
   * @param {Boolean} filtersChanged - if filters have changed
   */
  fetchShowsData(pageIndex, data, filtersChanged) {

    let genre = data.genre === 'All' ? '' : data.genre,
      station = data.station === false ? '' : data.localCallsign,
      alphaSort = data.sortBy === 'popular' ? false : true,
      self = this;

    if (!this.state.fetching) {

      // set state as fetching data to prevent multiple fetches
      this.setState({fetching: true});

      jQuery.ajax({
        url: '/shows-page/' + pageIndex + '/?genre=' + genre + '&title=' + data.title.trim() + '&callsign=' + station + '&alphabetically=' + alphaSort,
        context: document.body
      }).done(function(data){
        self.onFetchShowSuccess(data, filtersChanged);
      });
    }

  },

  /**
   * Callback for on successful fetch of shows data.
   * @param {Object} data - data returned from ajax call
   */
  onFetchShowSuccess(data, filtersChanged) {

    let unnestedData = {
        fetching: false
      },
      currentContentList;

    if (data.results) {

      // combine current content with new content if no filters applied
      currentContentList = filtersChanged ? data.results.content : this.mergeCurrentAndNewContent(data.results.content);

      // create copy of object to match properties with state object
      unnestedData = jQuery.extend(unnestedData, data.results, {
        genreList: data.genres,
        content: currentContentList,
        localStation: data.station_common_name,
      });

      // only set this once
      if (!this.state.fetched) {
        unnestedData.fetched = true;
      }
    }

    // make sure element is mounted
    if (this.isMounted()) {
      this.filterDelay = undefined;
      this.setState(unnestedData);
    }

  },

  /**
   * Merge current content with new content to reduce dups.
   * @param {Object} data - data returned from ajax call
   * @returns {Array} - array of current and new shows
   */
  mergeCurrentAndNewContent(data) {

    let currentContent = this.state.content,
      newContent = data,
      newShow;

    if (data.length > 0 && currentContent.length > 0) {

      // filter duplicate shows out of new content
      newContent = data.filter((show) => {

        // check if show is in current content list
        for (let i = 0; i < currentContent.length; i++) {
          if (currentContent[i].title.toLowerCase() === show.title.toLowerCase()) {
            newShow = false;
            return false;
          }
        }

        return true;

      });
    }

    // concat old content and new content
    return currentContent.concat(newContent);
  },

  /**
   * Checks if filter has changed.
   * @param {Object} oldValues - old state object
   * @param {Object} newValues - new state object
   * @param {String} selectedFilter - filter key to check
   */
  hasFilterChanged(oldValues, newValues, selectedFilter) {
    return oldValues[selectedFilter] !== newValues[selectedFilter];
  },

  /**
   * Gets search params from Url.
   */
  getSearchParamsFromUrl() {
    let updatedFilters = {},
      filter,
      filterVal;

    // loop through filters and get values
    for (let key in this.filters) {
      if (this.filters.hasOwnProperty(key)) {

        // get filter object for default value
        filter = this.filters[key];

        // get filter value from url
        filterVal = this.getURLParameter(key);

        // if no value in url, set to default value
        if (!filterVal) {
          filterVal = filter.defaultVal;
        }

        // for station, ensure it is a boolean
        if (key === 'station' || key === 'alphabetically') {
          filterVal = (filterVal === 'true');
        }

        updatedFilters[key] = filterVal;
      }
    }

    return updatedFilters;
  },

  /**
   * Sets up intial filters from URL params.
   */
  setSearchParamsInUrl() {

    let updatedFilters = this.getSearchParamsFromUrl();

    // update state to filters and set history
    this.setState(updatedFilters);

  },

  /**
   * Gets a filter value from URL search string.
   * @param {String} key - filter key desired
   * @returns {String} - value of filter key passed in
   */
  getURLParameter(key) {

    let searchParamsStr = decodeURI(window.location.search.substring(1)),
      searchParamsArray = searchParamsStr.split('&'),
      param;

    // loop through each search param in array
    for (let i = 0; i < searchParamsArray.length; i++) {

      param = searchParamsArray[i].split('=');

      // if the params is equal to the filter key we want, return the value
      if (param[0] === key) {
        return param[1];
      }
    }
    return null;

  },

  /**
   * Sets the history based on filters.
   */
  setHistory() {

    let url = '?';

    // for each key, build a string of url search params
    for (let key in this.filters) {
      if (this.filters.hasOwnProperty(key)) {
        url += key + '=' + this.state[key] + '&';
      }
    }

    History.pushState({}, 'Watch PBS TV Shows Online', url.substring(0, url.length - 1));

  },

  /**
   * Updates states for filters that appear in URL and fires set history.
   * @param {String} key - filter key
   * @param {String|Boolean} val - value of that filter to set
   */
  updateStateAndParam(key, val) {

    let filters = {};

    filters[key] = val;
    this.setState(filters, this.setHistory);

  },

  /**
   * Callback for when title field is changed.
   * @param {event} e
   */
  onTitleInputChange(e) {
    let selectedTitle = e.target.value;
    this.updateStateAndParam('title', selectedTitle);

  },

  /**
   * Callback for when in title field a key is pressed.
   * @param {event} e
   */
  onTitleKeypressed(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        jQuery(e.target).blur();
      }
    }
  },

  /**
   * Callback for when select genre is changed.
   * @param {event} e
   */
  onGenreSelectChange(e) {

    let selectedGenre = e.target.value;
    this.updateStateAndParam('genre', selectedGenre);

  },

  /**
   * Callback for when station checkbox is changed.
   * @param {event} e
   */
  onStationCheckboxChange(e) {

    let stationCheckbox = e.target.checked;
    this.updateStateAndParam('station', stationCheckbox);

  },

  /**
   * Callback for when sort by option is clicked.
   * @param {event} e
   */
  onSortByClick(e) {

    let $el = jQuery(e.target),
      selectedSortVal = $el.data('sort');

    e.preventDefault();

    // update state and selected styling
    this.setState({
      sortBy: selectedSortVal
    });
    this.updateStateAndParam('alphabetically', (selectedSortVal === 'ascending'));
    this.toggleButton($el);

  },

  /**
   * Callback for when layout option is clicked.
   * @param {event} e
   */
  onLayoutClick(e) {

    let $el = jQuery(e.target),
      selectedLayout = $el.data('layout');

    e.preventDefault();

    // update state and selected styling
    this.updateStateAndParam('layout', selectedLayout);
    this.toggleButton($el);

  },

  /**
   * Add active/selected classes for filter button.
   * @param {jQuery selection} $el - element clicked
   */
  toggleButton($el) {

    $el.addClass('selected-btn')
      .siblings('.btn')
        .removeClass('selected-btn');
  }

});

module.exports = ShowsFilterForm;

jQuery(($) => {
  // render the component
  ReactDOM.render(<ShowsFilterForm offset={100} />, document.getElementById('shows-landing__container'));
});


